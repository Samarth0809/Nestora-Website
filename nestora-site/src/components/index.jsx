"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import DataTable from "react-data-table-component";
import { FaPlus, FaFilter, FaChevronDown, FaTrash, FaEdit, FaFileExcel, FaUpload, FaTimes, FaPlusCircle, FaUserPlus, FaEye } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Button from "@/components/Ui/Buttons/Button";
import ConfirmModal from "@/components/Ui/ConfirmModal";
import StatusToggleButton from "@/components/Shared/StatusToggleButton";
import SearchableSelect from "@/components/Ui/Inputs/SearchableSelect";
import Input from "@/components/Ui/Inputs/Input";
import TableSkeleton from "@/components/Ui/TableSkeleton";
import { customTableStyles as customStyles } from "@/utils/tableStyles";
import OffCanvas from "@/components/Ui/OffCanvas";

import { fetchCompaniesApi, updateCompanyStatusApi, deleteCompanyApi, bulkDeleteCompaniesApi, exportCompaniesApi, assignCompaniesStaffApi, getAllUser } from "@/utils/Api";
import { getUserData } from "@/utils/core_helper";
import coreHelper from "@/helper/core_helper";
import { toast } from "react-hot-toast";
import * as XLSX from "xlsx";
import CommonDropdown from "@/components/Ui/ThreeDotsDropdown/CommonDropdown";
import { useHeader } from "@/context/HeaderContext";


// -- Filter defaults and helpers --
const defaultFilters = {
  companyName: "",
  executiveName: "",
  companyContact: "",
  companyEmail: "",
  clientType: "",
  status: "",
  supportStaffName: "",
};
const FILTERS_STORAGE_KEY = "companies_filters_v1";
const clientTypeOptions = [
  { value: "", label: "All Types" },
  { value: "SaaS", label: "SaaS" },
  { value: "Assisted", label: "Assisted" },
];
const statusOptions = [
  { value: "", label: "All Status" },
  { value: "Active", label: "Active" },
  { value: "In-active", label: "In-active" },
];

export default function CompaniesList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dropdownRef = useRef(null);
  const debounceTimer = useRef(null);
  const companyDebounceRef = useRef(null);

  // --- FILTERS & PAGINATION STATE ---
  const getInitialFilters = () => ({
    companyName: searchParams.get("companyName") || "",
    executiveName: searchParams.get("executiveName") || "",
    companyContact: searchParams.get("companyContact") || "",
    companyEmail: searchParams.get("companyEmail") || "",
    clientType: searchParams.get("clientType") || "",
    status: searchParams.get("status") || "",
    supportStaffName: searchParams.get("supportStaffName") || "",
    startDate: searchParams.get("startDate") || "",
    endDate: searchParams.get("endDate") || "",
  });
  const getInitialPagination = () => ({
    page: parseInt(searchParams.get("page")) || 1,
    perPage: parseInt(searchParams.get("perPage")) || 15,
  });
  // Persisted filters/page/perPage (sessionStorage)
  const persistedStateRef = useRef(null);

  if (persistedStateRef.current === null && typeof window !== "undefined") {
    try {
      const raw = window.sessionStorage.getItem(FILTERS_STORAGE_KEY);
      persistedStateRef.current = raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Failed to read companies filters from storage", error);
      persistedStateRef.current = null;
    }
  }

  const urlInitialFilters = getInitialFilters();
  const urlInitialPagination = getInitialPagination();

  const initialFilters = { ...urlInitialFilters, ...(persistedStateRef.current?.filters || {}) };
  const initialPage = persistedStateRef.current && Number(persistedStateRef.current?.page) > 0
    ? Number(persistedStateRef.current.page)
    : urlInitialPagination.page;
  const initialPerPage = persistedStateRef.current && Number(persistedStateRef.current?.perPage) > 0
    ? Number(persistedStateRef.current.perPage)
    : urlInitialPagination.perPage;

  const [filters, setFilters] = useState(initialFilters);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // --- DATA STATE ---
  const [companies, setCompanies] = useState([]);
  // Staff options derived from company rows (support_staff + support_staff_name)
  const [staffOptions, setStaffOptions] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setHeaderProps } = useHeader();

  // --- AUTH / USER ---
  const [userType, setUserType] = useState(null);
  // Set header props on mount and cleanup on unmount
  const hasPermission = useCallback(
    (...keys) => keys.filter(Boolean).some((key) => coreHelper.hasPermission(key)),
    []
  );

  // Set header props on mount and cleanup on unmount
  useEffect(() => {
          if (setHeaderProps) {
            setHeaderProps({
              pageTitle: "Companies",
              pageSubtitle: null,
              hideshowtitle: true, // optional, defaults to responsive show/hide
              headerActions: (
                <>
            
                 </>
              )
            });
          }
      
          // Cleanup: reset header props when component unmounts
          return () => {
            if (setHeaderProps) {
              setHeaderProps({ pageTitle: null, pageSubtitle: null, headerActions: null });
            }
          };
        }, [setHeaderProps, userType, hasPermission]);
  

  useEffect(() => {
    try {
      const ud = getUserData();
      const ut = ud && ud.userType ? Number(ud.userType) : null;
      setUserType(ut);
    } catch (e) {
      setUserType(null);
    }
  }, []);

  // --- UI STATE ---
  // OffCanvas state for filters (staged editing like Blogs/Colleges pattern)
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showCompanyCanvas, setShowCompanyCanvas] = useState(false);
  const [companyView, setCompanyView] = useState(null);
  // Staged (temporary) filters edited inside OffCanvas before applying
  const [tempFilters, setTempFilters] = useState(filters);
  // Autocomplete suggestions for Company Name
  const [companySuggestions, setCompanySuggestions] = useState([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const [suggestionActiveIndex, setSuggestionActiveIndex] = useState(-1);
  const suggestionsRef = useRef(null);
  const skipSuggestionFetchRef = useRef(false);

  // Derive active filters count & pills (for UI consistency with other pages)
  const getActiveFilters = () => {
    const f = filters;
    const pills = [];
    if (f.companyName) pills.push({ key: 'companyName', label: `Company: ${f.companyName}` });
    if (f.executiveName) pills.push({ key: 'executiveName', label: `Executive: ${f.executiveName}` });
    if (f.companyContact) pills.push({ key: 'companyContact', label: `Contact: ${f.companyContact}` });
    if (f.companyEmail) pills.push({ key: 'companyEmail', label: `Email: ${f.companyEmail}` });
    if (f.clientType) pills.push({ key: 'clientType', label: `Type: ${f.clientType}` });
    if (f.status) pills.push({ key: 'status', label: `Status: ${f.status}` });
    if (f.supportStaffName) pills.push({ key: 'supportStaffName', label: `Staff: ${getStaffLabelById(f.supportStaffName)}` });
    if (f.startDate || f.endDate) {
      pills.push({
        key: "dateRange",
        label: `Date: ${f.startDate || "..."} to ${f.endDate || "..."}`,
      });
    }
    return pills;
  };
  const activeFilterPills = getActiveFilters();
  const activeFiltersCount = activeFilterPills.length;

  const removeFilterPill = (key) => {
    if (key === "dateRange") {
      handleFilterChange("dateRange", { startDate: "", endDate: "" });
      return;
    }
    handleFilterChange(key, '');
  };

  const openFiltersPanel = () => {
    setTempFilters({ ...filters }); // sync staged values without sharing reference
    setFiltersOpen(true);
  };

  // Fetch company/job suggestions (debounced)
  const fetchCompanySuggestions = async (q) => {
    if (!q || !q.trim()) {
      setCompanySuggestions([]);
      setSuggestionsOpen(false);
      return;
    }
    setSuggestionsLoading(true);
    try {
      // Use companies list endpoint and search by company_name
      const body = { limit: 10, offset: 0, company_name: q.trim() };
      const resp = await fetchCompaniesApi(body);
      const payload = resp?.data || resp || {};
      const companiesRes = payload?.data || payload?.companies || [];
      const list = Array.isArray(companiesRes) ? companiesRes : Object.values(companiesRes || {});
      // Normalize suggestions to objects with company_name and id when possible
      const normalized = list.map((c) => ({
        id: c?.id ?? c?.company_id ?? null,
        company_name: c?.company_name || c?.name || c?.company || "",
      }));
      setCompanySuggestions(normalized);
      setSuggestionsOpen(normalized && normalized.length > 0);
      setSuggestionActiveIndex(-1);
    } catch (err) {
      console.error("Suggestion fetch error:", err);
      setCompanySuggestions([]);
      setSuggestionsOpen(false);
    } finally {
      setSuggestionsLoading(false);
    }
  };

  // Async loader compatible with Inputs/SearchableSelect.loadOptions
  const loadCompanyOptions = async ({ page = 1, search = "", pageSize = 10 } = {}) => {
    try {
      const body = { limit: pageSize, offset: (page - 1) * pageSize, company_name: search?.trim() || "" };
      const resp = await fetchCompaniesApi(body);
      const payload = resp?.data || resp || {};
      const companiesRes = payload?.data || payload?.companies || [];
      const list = Array.isArray(companiesRes) ? companiesRes : Object.values(companiesRes || {});
      const options = list.map((c) => {
        const label = c?.company_name || c?.name || c?.company || "";
        return { value: label, label };
      });
      const hasMore = (list.length || 0) >= pageSize;
      return { options, hasMore };
    } catch (err) {
      return { options: [], hasMore: false };
    }
  };

  // Debounce tempFilters.companyName for suggestions
  useEffect(() => {
    if (companyDebounceRef.current) clearTimeout(companyDebounceRef.current);
    const q = tempFilters.companyName || "";
    if (skipSuggestionFetchRef.current) {
      // skip one fetch cycle after a user selection
      skipSuggestionFetchRef.current = false;
      return;
    }
    if (!q || q.trim().length < 2) {
      setCompanySuggestions([]);
      setSuggestionsOpen(false);
      return;
    }
    companyDebounceRef.current = setTimeout(() => {
      fetchCompanySuggestions(q);
    }, 300);
    return () => {
      if (companyDebounceRef.current) clearTimeout(companyDebounceRef.current);
    };
  }, [tempFilters.companyName]);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setSuggestionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const mergeStaffOptions = useCallback((...lists) => {
    const byId = new Map();
    lists
      .flat()
      .filter(Boolean)
      .forEach((opt) => {
        const key = String(opt?.value || "").trim();
        const label = String(opt?.label || "").trim();
        if (!key || !label) return;
        if (!byId.has(key)) byId.set(key, { value: key, label });
      });
    return Array.from(byId.values()).sort((a, b) =>
      String(a.label).localeCompare(String(b.label)),
    );
  }, []);

  const fetchSupportStaffOptions = useCallback(async () => {
    try {
      const resp = await getAllUser({
        user_type: 3,
        status: "Active",
        page: 1,
        per_page: 500,
        limit: 500,
      });

      const list = Array.isArray(resp?.data?.data)
        ? resp.data.data
        : Array.isArray(resp?.data?.users)
          ? resp.data.users
          : [];

      const apiOptions = list
        .map((u) => {
          const id = u?.id;
          const name =
            u?.full_name ||
            [u?.first_name, u?.last_name].filter(Boolean).join(" ") ||
            "";
          if (!id || !name) return null;
          return { value: String(id), label: String(name).trim() };
        })
        .filter(Boolean);

      setStaffOptions((prev) => mergeStaffOptions(prev, apiOptions));
    } catch (error) {
      console.error("Failed to load support staff options:", error);
    }
  }, [mergeStaffOptions]);

  useEffect(() => {
    fetchSupportStaffOptions();
  }, [fetchSupportStaffOptions]);

  // Helper to map staff id -> label from staffOptions
  function getStaffLabelById(id) {
    if (!id) return "";
    const opt = staffOptions.find((o) => String(o.value) === String(id));
    return opt?.label || id;
  }

  const applyFiltersFromOffCanvas = () => {
    // Apply staged changes only now
    const newFilters = { ...tempFilters };
    setFilters(newFilters);
    setCurrentPage(1);
    setSelectedRows([]);
    setClearSelectedRowsToggle((prev) => !prev);
    updateURL(newFilters, 1, perPage);
    fetchCompanies(1, perPage, sortField, sortOrder, false, newFilters);
    setFiltersOpen(false);
  };

  const clearAllFiltersOffCanvas = (keepPanelOpen = false) => {
    setTempFilters({ ...defaultFilters });
    // Clear applied filters and optionally keep the offcanvas open
    clearFilters();
    if (!keepPanelOpen) setFiltersOpen(false);
  };

  const cancelFiltersOffCanvas = () => {
    setTempFilters({ ...filters }); // revert staged
    setFiltersOpen(false);
  };
  const [showActionDropdown, setShowActionDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [clearSelectedRowsToggle, setClearSelectedRowsToggle] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [bulkDeleteIds, setBulkDeleteIds] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmInput, setConfirmInput] = useState("");
  const [showStatusConfirmModal, setShowStatusConfirmModal] = useState(false);
  const [statusToggleRow, setStatusToggleRow] = useState(null);
  const [statusToggleLoading, setStatusToggleLoading] = useState(new Set());
  const [actionConfirm, setActionConfirm] = useState(null); // for future use if needed
  // Assign staff drawer state
  const [assignOpen, setAssignOpen] = useState(false);
  const [assignStaff, setAssignStaff] = useState("");
  const [assignLoading, setAssignLoading] = useState(false);

  // --- URL SYNC ---
  function updateURL(newFilters, page, perPageArg) {
    const _page = page !== undefined ? page : currentPage;
    const _perPage = perPageArg !== undefined ? perPageArg : perPage;
    const params = new URLSearchParams();

    if (newFilters.companyName && newFilters.companyName.trim())
      params.set("companyName", newFilters.companyName.trim());

    if (newFilters.executiveName && newFilters.executiveName.trim())
      params.set("executiveName", newFilters.executiveName.trim());

    if (newFilters.companyContact && newFilters.companyContact.trim())
      params.set("companyContact", newFilters.companyContact.trim());

    if (newFilters.companyEmail && newFilters.companyEmail.trim())
      params.set("companyEmail", newFilters.companyEmail.trim());

    if (newFilters.clientType && newFilters.clientType.trim())
      params.set("clientType", newFilters.clientType.trim());

    if (newFilters.status && newFilters.status.trim())
      params.set("status", newFilters.status.trim());
    if (newFilters.supportStaffName && String(newFilters.supportStaffName).trim())
      params.set("supportStaffName", String(newFilters.supportStaffName).trim());

    if (newFilters.startDate) params.set("startDate", newFilters.startDate);
    if (newFilters.endDate) params.set("endDate", newFilters.endDate);

    if (_page > 1) params.set("page", String(_page));
    if (_perPage !== 15) params.set("perPage", String(_perPage));
    const query = params.toString();
    const newURL = query ? `?${query}` : window.location.pathname;
    window.history.replaceState({}, "", newURL);
  }

  // --- FETCH COMPANIES ---
  const fetchCompanies = async (
    page = 1,
    limit = 15,
    sf = sortField,
    so = sortOrder,
    isInit = false,
    overrideFilters = null
  ) => {
    try {
      if (isInit) setIsInitialLoading(true);
      setError(null);
      const offset = (page - 1) * limit;
      const activeFilters = overrideFilters || filters;
      const body = {
        limit,
        offset,
        ...(sf && { sort_field: sf }),
        ...(so && { sort_order: so }),
        ...(activeFilters.companyName && {
          company_name: activeFilters.companyName.trim(),
        }),
        ...(activeFilters.executiveName && {
          executive_name: activeFilters.executiveName.trim(),
        }),
        ...(activeFilters.companyContact && {
          mobile: activeFilters.companyContact.trim(),
        }),
        ...(activeFilters.companyEmail && {
          email: activeFilters.companyEmail.trim(),
          company_email: activeFilters.companyEmail.trim(),
        }),
        ...(activeFilters.clientType && { client_type: activeFilters.clientType }),
        ...(activeFilters.status && { status: activeFilters.status }),
        ...(activeFilters.supportStaffName && {
          support_staff: parseInt(activeFilters.supportStaffName, 10),
        }),
        ...(activeFilters.startDate && { created_from: activeFilters.startDate }),
        ...(activeFilters.endDate && { created_to: activeFilters.endDate }),
      };
      const res = await fetchCompaniesApi(body);
      let data = res?.data?.data || [];
      let total = res?.data?.pagination?.total || data.length;
      setCompanies(data);
      // Derive support staff options from returned companies (unique per id)
      try {
        const optsMap = new Map();
        (data || []).forEach((c) => {
          if (c.support_staff && c.support_staff_name) {
            const key = String(c.support_staff);
            if (!optsMap.has(key)) optsMap.set(key, { value: key, label: c.support_staff_name });
          }
        });
        // convert to array
        const opts = Array.from(optsMap.values());
        setStaffOptions((prev) => mergeStaffOptions(prev, opts));
      } catch (e) {
        // ignore
      }
      setTotalRows(total);
    } catch (err) {
      setError(err.message || "Failed to fetch companies");
      setCompanies([]);
      setTotalRows(0);
    } finally {
      setIsInitialLoading(false);
      setIsSearching(false);
      setIsFilterLoading(false);
    }
  };

  // --- FILTER/EFFECT SYNC ---
  useEffect(() => {
    // If we have persisted state, keep it (do not overwrite filters/page/perPage).
    if (persistedStateRef.current) {
      return;
    }

    setFilters(getInitialFilters());
    setCurrentPage(getInitialPagination().page);
    setPerPage(getInitialPagination().perPage);
  }, [searchParams]);

  useEffect(() => {
      fetchCompanies(currentPage, perPage, sortField, sortOrder, true);
  }, []);

  useEffect(() => {
    if (!isInitialLoading) fetchCompanies(1, perPage, sortField, sortOrder);
  }, [sortField, sortOrder]);

  // Persist filters/page/perPage to sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(
        FILTERS_STORAGE_KEY,
        JSON.stringify({ filters, page: currentPage, perPage })
      );
    } catch (error) {
      console.warn("Failed to persist companies filters", error);
    }
  }, [filters, currentPage, perPage]);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    const hasSearchText = [
      filters.companyName,
      filters.executiveName,
      filters.companyContact,
      filters.companyEmail,
    ].some((v) => v && v.trim());
    const hasActiveFilters =
      (filters.clientType && filters.clientType.trim()) ||
      (filters.status && filters.status.trim()) ||
      (filters.supportStaffName && String(filters.supportStaffName).trim()) ||
      (filters.startDate && filters.startDate.trim()) ||
      (filters.endDate && filters.endDate.trim());
    if (hasSearchText) setIsSearching(true);
    else if (hasActiveFilters) setIsFilterLoading(true);
    const delay = hasSearchText ? 500 : 0;
    debounceTimer.current = setTimeout(() => {
      if ((hasSearchText || hasActiveFilters) && currentPage !== 1) {
        setCurrentPage(1);
        return;
      }
      fetchCompanies(currentPage, perPage);
    }, delay);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [
    filters.companyName,
    filters.executiveName,
    filters.companyContact,
    filters.companyEmail,
    filters.clientType,
    filters.status,
    filters.supportStaffName,
    filters.startDate,
    filters.endDate,
  ]);

  useEffect(() => {
    if (!isInitialLoading) fetchCompanies(currentPage, perPage);
  }, [currentPage, perPage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowActionDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close any open row dropdown when clicking outside (mirrors ListColleges behavior)
  useEffect(() => {
    const handler = (e) => {
      try {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setShowActionDropdown(false);
          try {
            setDropdownOpen && setDropdownOpen(null);
          } catch (err) {}
        }
      } catch (err) {}
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // --- FILTER HANDLERS ---
  const handleFilterChange = (filterName, value) => {
    let newFilters;
    if (filterName === "dateRange") {
      newFilters = { ...filters, startDate: value.startDate, endDate: value.endDate };
    } else {
      newFilters = { ...filters, [filterName]: value };
    }
    setFilters(newFilters);
    setCurrentPage(1);
    setSelectedRows([]);
    setClearSelectedRowsToggle((prev) => !prev);
    updateURL(newFilters, 1, perPage);
  };
  const clearFilters = () => {
    const cleared = {
      companyName: "",
      executiveName: "",
      companyContact: "",
      companyEmail: "",
      clientType: "",
      status: "",
      supportStaffName: "",
      startDate: "",
      endDate: "",
    };
    setFilters(cleared);
    setCurrentPage(1);
    setSelectedRows([]);
    setClearSelectedRowsToggle((prev) => !prev);
    setIsSearching(false);
    setIsFilterLoading(false);
    updateURL(cleared, 1, perPage);
  };

  // --- PAGINATION/SORT HANDLERS ---
  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateURL(filters, page, perPage);
  };
  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    setCurrentPage(page);
    updateURL(filters, page, newPerPage);
  };
  const handleSort = (column, direction) => {
    let field = column.sortField;
    if (!field) {
      if (column.name === "Company Name") field = "company_name";
      else if (column.name === "Executive") field = "executive_name";
      else if (column.name === "Email") field = "email";
      else if (column.name === "Contact") field = "mobile";
      else if (column.name === "Client Type") field = "client_type";
      else if (column.name === "Status") field = "status";
    }
    if (!field) return;
    setSortField(field);
    setSortOrder(direction);
    setCurrentPage(1);
    fetchCompanies(1, perPage, field, direction);
  };

  // --- DELETE & EDIT ---
  const handleDelete = (row) => {
    setDeleteId(row.id);
    setConfirmMessage(
      `Are you sure you want to delete company "${row.company_name}"?`
    );
    setShowConfirmModal(true);
  };
  const handleEdit = (row) => {
    try {
      const enc = encodeURIComponent(btoa(String(row.id)));
      router.push(`/companies/addedit/${enc}`);
    } catch (e) {
      router.push(`/companies/addedit`);
    }
  };

  const handleView = (row) => {
    try {
      const enc = encodeURIComponent(btoa(String(row.id)));
      // router.push(`/companies/addedit/${enc}?view=1`);
       router.push(`/companies/${enc}`);
    } catch (e) {
      // router.push(`/companies/addedit`);
       console.error("Navigation error", e);
    }
  };

  const openCompanyCanvas = (row) => {
    setCompanyView(row || null);
    setShowCompanyCanvas(true);
  };

  const closeCompanyCanvas = () => {
    setCompanyView(null);
    setShowCompanyCanvas(false);
  };

  // --- STATUS TOGGLE ---
  // Keep legacy modal handlers for backward compatibility, but prefer performStatusUpdate via shared component
  const handleStatusToggleClick = (row) => {
    setStatusToggleRow(row);
    setShowStatusConfirmModal(true);
  };

  const handleConfirmStatusToggle = async () => {
    if (!statusToggleRow) return;
    await performStatusUpdate(statusToggleRow.id, statusToggleRow.status);
    setShowStatusConfirmModal(false);
    setStatusToggleRow(null);
  };

  const handleCancelStatusToggle = () => {
    setShowStatusConfirmModal(false);
    setStatusToggleRow(null);
  };

  // Perform actual update for a given row id and current status (used by shared component customUpdate)
  const performStatusUpdate = async (rowId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "In-active" : "Active";
    try {
      setStatusToggleLoading((prev) => new Set([...prev, rowId]));
      const res = await updateCompanyStatusApi(rowId, newStatus);
      if (res && res.status) {
        toast.success("Company status updated");
        setCompanies((prev) =>
          prev
            .filter((company) => {
              if (filters.status && filters.status.trim()) {
                if (
                  company.id === rowId &&
                  newStatus.toLowerCase() !== filters.status.trim().toLowerCase()
                ) {
                  return false;
                }
              }
              return true;
            })
            .map((company) => (company.id === rowId ? { ...company, status: newStatus } : company))
        );
      } else {
        throw new Error(res?.msg || "Failed to update status");
      }
    } catch (error) {
      setCompanies((prev) => prev.map((company) => (company.id === rowId ? { ...company, status: currentStatus } : company)));
      toast.error("Failed to update company status");
    } finally {
      setStatusToggleLoading((prev) => {
        const newSet = new Set([...prev]);
        newSet.delete(rowId);
        return newSet;
      });
    }
  };

  // --- CONFIRM DELETE (single & bulk) ---
  const handleCancelConfirm = () => {
    setShowConfirmModal(false);
    setDeleteId(null);
    setBulkDeleteIds([]);
    setConfirmInput("");
  };
  const handleRowSelected = (state) => setSelectedRows(state.selectedRows);
  const handleBulkDelete = () => {
    if (selectedRows.length === 0) return;
    const ids = selectedRows.map((row) => row.id);
    setBulkDeleteIds(ids);
    setConfirmMessage(
      `Are you sure you want to delete ${selectedRows.length} selected companies?`
    );
    setShowConfirmModal(true);
    setShowActionDropdown(false);
  };
  // Build export payload from current filters (used for server-side export)
  const buildExportPayload = () => {
    const body = {
      // Ask backend to stream all filtered rows if supported
      fetch_all: 1,
      limit: perPage,
      offset: (currentPage - 1) * perPage,
      ...(sortField && { sort_field: sortField }),
      ...(sortOrder && { sort_order: sortOrder }),
      ...(filters.companyName && { company_name: filters.companyName.trim() }),
      ...(filters.executiveName && { executive_name: filters.executiveName.trim() }),
      ...(filters.companyContact && { mobile: filters.companyContact.trim() }),
      ...(filters.companyEmail && { email: filters.companyEmail.trim(), company_email: filters.companyEmail.trim() }),
      ...(filters.clientType && { client_type: filters.clientType }),
      ...(filters.status && { status: filters.status }),
      ...(filters.supportStaffName && { support_staff: parseInt(filters.supportStaffName, 10) }),
    };
    return body;
  };

  // Normalize helpers for exporting
  const firstNonEmpty = (...vals) => {
    for (const v of vals) {
      const s = typeof v === "number" ? String(v) : (v || "");
      if (String(s).trim()) return String(s).trim();
    }
    return "";
  };
  const buildCompanyExportRow = (r) => {
    // Address variants
    const address = firstNonEmpty(
      r.company_address,
      r.address,
      [r.address_line1, r.address_line2].filter(Boolean).join(", "),
      r.address1,
      r.address2
    );
    const country = firstNonEmpty(r.country_name, r.country, r.company_country);
    const state = firstNonEmpty(r.state_name, r.state, r.company_state, r.stateName);
    const city = firstNonEmpty(r.city_name, r.city, r.company_city, r.cityName);
    const website = firstNonEmpty(r.website, r.company_website, r.website_link);
    const profile = firstNonEmpty(r.company_profile, r.profile, r.company_description, r.description);
    const pincode = firstNonEmpty(r.pincode, r.pin_code, r.zip, r.zipcode, r.postal_code, r.postcode);

    return {
      "Company Name": firstNonEmpty(r.company_name),
      "Executive Name": firstNonEmpty(r.executive_name),
      "Company Email": firstNonEmpty(r.email, r.company_email),
      "Contact Number": firstNonEmpty(r.mobile),
      "Website Link": website,
      "Company Profile": profile,
      Address: address,
      Country: country,
      State: state,
      City: city,
      Pincode: pincode,
    };
  };

  // Export handler (mirrors Colleges – selected rows via XLSX; else try server export, fallback to current page)
  const handleExportExcel = async () => {
    try {
      if (selectedRows.length > 0) {
        const exportData = selectedRows.map(buildCompanyExportRow);
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Companies");
        XLSX.writeFile(
          wb,
          `Companies_Selected_${exportData.length}_${new Date().toISOString().split("T")[0]}.xlsx`
        );
        setShowActionDropdown(false);
        toast.success(`Exported ${exportData.length} selected records.`);
        return;
      }

      // Try server-side export for all filtered rows
      toast.loading("Preparing server-side export...");
      try {
        const body = buildExportPayload();
        const resp = await exportCompaniesApi(body, { responseType: "blob" });
        const blob = resp.data;
        const cd = resp.headers?.["content-disposition"] || resp.headers?.["Content-Disposition"];
        const filename = cd?.match(/filename="?(.*)"?/)?.[1] || `companies_export_${new Date().toISOString().split("T")[0]}.csv`;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setShowActionDropdown(false);
        toast.success("Export started — downloading file");
      } catch (err) {
        console.error("Export error (server-side):", err);
        // Fallback: attempt to fetch full dataset from server and export
        try {
          const rowsToRequest = Number.isFinite(totalRows) && totalRows > 0 ? totalRows : 1000000;
          const payloadBody = {
            limit: rowsToRequest,
            offset: 0,
            ...(sortField && { sort_field: sortField }),
            ...(sortOrder && { sort_order: sortOrder }),
            ...(filters.companyName && { company_name: filters.companyName.trim() }),
            ...(filters.executiveName && { executive_name: filters.executiveName.trim() }),
            ...(filters.companyContact && { mobile: filters.companyContact.trim() }),
            ...(filters.companyEmail && { email: filters.companyEmail.trim(), company_email: filters.companyEmail.trim() }),
            ...(filters.clientType && { client_type: filters.clientType }),
            ...(filters.status && { status: filters.status }),
            ...(filters.supportStaffName && { support_staff: parseInt(filters.supportStaffName, 10) }),
          };

          const res2 = await fetchCompaniesApi(payloadBody);
          const allData = res2?.data?.data || [];
          if (!allData || allData.length === 0) {
            throw err; // rethrow original to reach outer catch
          }
          const exportData = allData.map(buildCompanyExportRow);
          const ws = XLSX.utils.json_to_sheet(exportData);
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "Companies");
          XLSX.writeFile(wb, `Companies_All_${exportData.length}_${new Date().toISOString().split("T")[0]}.xlsx`);
          setShowActionDropdown(false);
          toast.success(`Exported ${exportData.length} rows from server`);
        } catch (innerErr) {
          console.error("Fallback full-fetch export failed:", innerErr);
          // Last-resort fallback: export current page data
          const exportData = (companies || []).map(buildCompanyExportRow);
          if (exportData.length === 0) throw err;
          const ws = XLSX.utils.json_to_sheet(exportData);
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "Companies");
          XLSX.writeFile(wb, `Companies_Page_${exportData.length}_${new Date().toISOString().split("T")[0]}.xlsx`);
          setShowActionDropdown(false);
          toast.success(`Exported ${exportData.length} rows from current page`);
        }
      } finally {
        toast.dismiss();
      }
    } catch (e) {
      toast.dismiss();
      toast.error(e?.message || "Failed to export Excel file");
    }
  };

  const handleMenuClick = async (action) => {
    if (action === "Export Excel") return handleExportExcel();
    if (action === "Import Excel") {
      setShowActionDropdown(false);
      return (window.location.href = "/companies/import");
    }
    if (action === "Delete Meta Data") {
      try {
        if (!selectedRows || selectedRows.length === 0) {
          toast.error("Please select at least one company to delete");
          setShowActionDropdown(false);
          return;
        }

        const ids = selectedRows.map((r) => r.id).filter(Boolean);
        if (ids.length === 0) {
          toast.error("No valid company IDs found");
          setShowActionDropdown(false);
          return;
        }

        const count = ids.length;
        const message =
          count === 1
            ? `Are you sure you want to permanently delete this company and all related metadata? This action cannot be undone.`
            : `Are you sure you want to permanently delete ${count} companies and all their related metadata? This action cannot be undone.`;

        await coreHelper.deleteMetaRecord(
          ids,
          "companies",
          {
            title: "Confirm Meta Delete",
            message,
            confirmText: "Delete Permanently",
            cancelText: "Cancel",
          },
          async (result) => {
            if (result && result.status) {
              toast.success(result.msg || "Company metadata deleted successfully");
              const hasActiveFilters = Object.values(filters).some(Boolean);
              const deletingAllVisible = Array.isArray(companies) && companies.length > 0 && companies.length === ids.length;
              if (deletingAllVisible && hasActiveFilters) {
                setFilters((prev) => ({ ...prev, companyName: "", executiveName: "", companyContact: "", companyEmail: "" }));
                setTempFilters((prev) => ({ ...prev, companyName: "", executiveName: "", companyContact: "", companyEmail: "" }));
                setCurrentPage(1);
                setSelectedRows([]);
                setClearSelectedRowsToggle((p) => !p);
              } else {
                setSelectedRows([]);
                setClearSelectedRowsToggle((p) => !p);
                await fetchCompanies(currentPage, perPage);
              }
            } else if (result === null) {
              // cancelled by user
              console.log("Meta delete cancelled by user");
            } else {
              toast.error(result?.msg || "Failed to delete company metadata");
            }
          }
        );
      } catch (err) {
        console.error("handleMetaDelete (companies) error:", err);
        toast.error(err?.message || "An error occurred while deleting company metadata");
      } finally {
        setShowActionDropdown(false);
      }
      return;
    }
    if (action === "Assign Staff") {
      if (!selectedRows || selectedRows.length === 0) {
        toast.error("Please select at least one company to assign staff.");
        return;
      }
      await fetchSupportStaffOptions();
      setShowActionDropdown(false);
      setAssignStaff("");
      setAssignOpen(true);
      return;
    }
    if (action === "Delete") {
      handleBulkDelete();
      return;
    }
    setShowActionDropdown(false);
  };
  const handleConfirm = async () => {
    try {
      setIsFilterLoading(true);
      if (bulkDeleteIds.length > 0) {
        try {
          // try bulk endpoint first
          await bulkDeleteCompaniesApi(bulkDeleteIds);
        } catch (e) {
          // fallback: delete individually
          await Promise.all(bulkDeleteIds.map((id) => deleteCompanyApi(id)));
        }
        toast.success(`Successfully deleted ${bulkDeleteIds.length} companies`);
      } else if (deleteId) {
        await deleteCompanyApi(deleteId);
        toast.success("Company deleted successfully");
      }
      const shouldResetToFirstPage = currentPage > 1 && companies.length <= 1;
      const targetPage = shouldResetToFirstPage ? 1 : currentPage;
      if (shouldResetToFirstPage) setCurrentPage(1);
      await fetchCompanies(targetPage, perPage);
      setShowConfirmModal(false);
      setDeleteId(null);
      setBulkDeleteIds([]);
      setSelectedRows([]);
      setClearSelectedRowsToggle((prev) => !prev);
      setConfirmInput("");
    } catch (err) {
      toast.error(err.message || "Failed to delete company");
      setShowConfirmModal(false);
      setDeleteId(null);
      setBulkDeleteIds([]);
      setConfirmInput("");
    } finally {
      setIsFilterLoading(false);
    }
  };

  // --- ASSIGN STAFF HANDLERS ---
  const handleAssignConfirm = async () => {
    if (!assignStaff) {
      toast.error("Please choose a staff member to assign.");
      return;
    }
    if (!selectedRows || selectedRows.length === 0) {
      toast.error("No companies selected to assign.");
      setAssignOpen(false);
      return;
    }
    const ids = selectedRows.map((r) => r.id);
    try {
      setAssignLoading(true);
      const payload = { company_ids: ids, staff_id: parseInt(assignStaff, 10) };
  await assignCompaniesStaffApi(payload);
      toast.success(`Assigned staff to ${ids.length} companies.`);
      setAssignOpen(false);
      // refresh list
      fetchCompanies(currentPage, perPage);
      setSelectedRows([]);
      setClearSelectedRowsToggle((p) => !p);
    } catch (err) {
      console.error("Assign staff error:", err);
      toast.error(err?.response?.data?.msg || err?.response?.data?.message || "Failed to assign staff");
    } finally {
      setAssignLoading(false);
    }
  };

  // --- TABLE COLUMNS ---
  const columns = [
    {
      name: "Logo",
      // grow: 0.01,
      selector: (r) => r.company_logo,
      width: "70px",
      cell: (r) =>
        r.company_logo ? (
         <div className="h-10 w-10  rounded-full flex justify-center items-center  overflow-hidden bg-sidebar">
           <img
            src={r.company_logo}
            alt={r.company_name}
            className=""
          />
         </div>
        ) : (
          <img
            src={"https://skillsconnect.blob.core.windows.net/skillsconnect-stage/uploads/company_logo/company_default_logo.png"}
            alt={r.company_name || 'Company'}
            title={r.company_name || 'Company'}
            className="w-10 h-10 object-cover rounded-full bg-gray-100"
          />
        ),
      ignoreRowClick: true,
    },
    {
      name: "Supporting Staff",
      selector: (r) => r.support_staff_name || "—",
      width: "130px",
      cell: (r) => r.support_staff_name || "—",
    },
    {
      name: "Company Name",
      sortField: "company_name",
      grow: 1.2,
      wrap: true,
      selector: (r) => r.company_name,
      sortable: true,
      cell: (r) => (
        <div className="break-all">
          {(() => {
            const canView = hasPermission("view-company");
            if (canView) {
              return (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleView(r);
                  }}
                  title={r.company_name}
                  className="text-capitalize font-medium text-left flex items-center gap-2 text-black underline cursor-pointer whitespace-normal break-words break-all"
                >
                  <span>{r.company_name}</span>
                </button>
              );
            }

            return (
              <div
                className="text-capitalize font-medium text-left flex items-center gap-2 text-black break-all"
                title={r.company_name}
              >
                <span>{r.company_name}</span>
              </div>
            );
          })()}
          <div className="mt-1">
                {r.client_type && (
                <span
                  className={`
                 px-2 py-0.5 rounded-full text-xs
                ${
                  r.client_type === "SaaS"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }
                border border-gray-200
              `}
                  style={{ fontSize: "11px", verticalAlign: "middle" }}
                >
                  {r.client_type}
                </span>
              )}
          </div>
        </div>
      ),
    },
    
    {
      name: "Executive Name",
      sortField: "executive_name",
      selector: (r) => r.executive_name || "—",
      sortable: true,
      grow: 0.7,
    },
    {
      name: "Contact",
      // shows email + phone in one column; sortable by email when available
      sortField: "email",
      wrap: true,
      selector: (r) => r.email || r.mobile || "—",
      sortable: true,
      grow: 1,
      cell: (r) => (
        <div className="flex flex-col">
          <span className="text-sm break-words whitespace-normal">{r.email || "—"}</span>
          <span className="text-gray-500 text-xs">{r.mobile || "—"}</span>
        </div>
      ),
    },
    {
      name: "Created On",
      sortField: "created_at",
      selector: (r) => r.created_on || "—",
      sortable: true,
     grow: 0.5,
      cell: (r) => {
        const date = new Date(r.created_on);
        return isNaN(date.getTime())
          ? "—"
          : date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });
      },
    },
    {
      name: "Status",
      sortField: "status",
      selector: (r) => r.status || "N/A",
      sortable: true,
      cell: (r) => {
        const rowId = r.id;
        const isUpdating = statusToggleLoading.has(rowId);
        return (
          <div className="flex items-center justify-center">
            <StatusToggleButton
              id={rowId}
              table="companies"
              status={r.status}
              onToggled={() => fetchCompanies(currentPage, perPage, sortField, sortOrder)}
              disabled={isUpdating}
              className="px-2 py-1 rounded-full text-xs"
            />
          </div>
        );
      },
      grow: 0.4,
      ignoreRowClick: true,
    },
    ...(hasPermission("view-company", "company-edit", "company-delete")
      ? [
          {
            name: "Actions",
            cell: (r) => {
              const itemsArr = [];
              if (hasPermission("view-company")) itemsArr.push({ label: "View", icon: FaEye, onClick: () => handleView(r) });
              if (hasPermission("company-edit")) itemsArr.push({ label: "Edit", icon: FaEdit, onClick: () => handleEdit(r) });
              if (hasPermission("company-delete")) itemsArr.push({ label: "Delete", icon: BsFillTrash3Fill, onClick: () => handleDelete(r) });
              if (itemsArr.length === 0) return <span className="text-gray-400 text-xs">-</span>;
              return (
                <div className="flex items-center justify-center">
                  <CommonDropdown
                    jobKey={r.id}
                    dropdownOpen={dropdownOpen}
                    setDropdownOpen={setDropdownOpen}
                    dropdownRef={dropdownRef}
                    items={itemsArr}
                  />
                </div>
              );
            },
            grow: 0.4,
            ignoreRowClick: true,
          },
        ]
      : []),
  ];
  
  // --- RENDER ---
  if (isInitialLoading && companies.length === 0) {
    return (
      <div className="py-2 w-full">
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <TableSkeleton rows={perPage} />
      </div>
    );
  }
  if (error && companies.length === 0) {
    return (
      <div className="py-2 w-full">
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <div className="p-4 text-red-600 bg-red-50 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="font-medium">Error:</span>
            <span>{error}</span>
          </div>
          <button
            onClick={() => fetchCompanies(1, perPage)}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className=" w-full">
      {/* Header Buttons */}
      <div className="flex flex-wrap-reverse lg:flex-nowrap flex-1 w-full lg:justify-start items-center mb-2 gap-3">
           {/* Active filter pills */}
              {activeFilterPills.length > 0 && (
              <div className="w-full">
                <div className="flex gap-2 items-center relative max-w-[45rem]">
                  <span className="text-sm font-normal text-gray-700 flex-shrink-0">Applied Filters:</span>
                      <style>{`
                        .hide-scrollbar::-webkit-scrollbar { display: none; }
                        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                      `}</style>
                      <div className="flex-1 min-w-0 flex gap-2 overflow-x-auto py-1 pr-16 hide-scrollbar" aria-label="Active filters">
                        {activeFilterPills.map(p => (
                          <div key={p.key} className="inline-flex items-center gap-2 bg-blue-100 text-black-800 text-xs font-normal px-2 py-0.1 rounded-lg border border-blue-200">
                            <span className="truncate max-w-[9rem] " title={p.label} >{p.label}</span>
                            <button
                              onClick={() => removeFilterPill(p.key)}
                              className="items-end text-teal-700 hover:text-teal-800 hover:bg-blue-300 rounded-full p-1 transition-colors"
                              title="Remove filter"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                    </div>
                </div>
              </div>
             )}
            
          {hasPermission(
              "company-delete",
              "company-export",
              "company-import",
              "staff-company-assign",
              "meta-data-delete",
              "company-filter"
            ) && String(userType) !== "5" && (
           <div className="w-full flex justify-end lg:justify-end lg:gap-2 gap-1">
            {activeFilterPills.length > 0 && (
                <button
                  onClick={() => clearFilters()}
                  className="text-sm text-red-600 hover:text-red-800 font-medium p-1"
                >
                 x Clear All
                </button>
                )}
            {/* <div className="flex items-center gap-3 mr-2 z-99">
            <CommonDateRangePicker
              startDate={filters.startDate}
              endDate={filters.endDate}
              onChange={({ startDate, endDate }) => handleFilterChange("dateRange", { startDate, endDate })}
              returnFormat="YYYY-MM-DD"
            />
            </div> */}
              {hasPermission("company-add") && (
              <>
              <Link
                href={"/companies/addedit"}
                >
                <Button
                  className="flex items-center"
                  type="button"
                  variant="primary"
                  >
                  <FaPlusCircle className="mr-2" />
                  <span>Create Company</span>
                </Button>
              </Link>
              </>
              )}
            <div className="relative" ref={dropdownRef}>
              <Button
                type="button"
                variant="outlinePrimary"
                size="md"
                onClick={() => setShowActionDropdown((p) => !p)}
                className="flex items-center gap-2"
              >
                Action {selectedRows.length > 0 && `(${selectedRows.length})`}
                <FaChevronDown
                  className={`transition-transform ${
                    showActionDropdown ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {showActionDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <ul className="text-sm text-gray-800 py-1">
                        {hasPermission("company-delete") && (
                          <li
                            onClick={() => handleMenuClick("Delete")}
                            className={`px-4 py-2 flex items-center gap-2 ${
                              selectedRows.length === 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-red-600 hover:bg-red-50 cursor-pointer"
                            }`}
                            title="Delete selected"
                          >
                            <FaTrash className="text-red-600" /> Delete Selected {selectedRows.length > 0 ? `(${selectedRows.length})` : ""}
                          </li>
                        )}

                        <li
                          onClick={() => handleMenuClick("Delete Meta Data")}
                          className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2"
                        >
                          <FaTimes className="text-red-500" /> Delete Meta Data
                        </li>

                        {hasPermission("staff-company-assign") && (
                          <li
                            onClick={() => handleMenuClick("Assign Staff")}
                            className={`px-4 py-2 flex items-center gap-2 ${
                              selectedRows.length === 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-cyan-700 hover:bg-gray-100 cursor-pointer"
                            }`}
                            title="Assign staff to selected companies"
                          >
                            <FaUserPlus className="text-cyan-700" /> Assign Staff {selectedRows.length > 0 ? `(${selectedRows.length})` : ""}
                          </li>
                        )}

                        {hasPermission("company-export") && (
                          <li
                            onClick={() => handleMenuClick("Export Excel")}
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2"
                          >
                            <FaFileExcel className="text-green-600" /> Export Excel
                          </li>
                        )}

                        {hasPermission("company-import") && (
                          <li
                            onClick={() => handleMenuClick("Import Excel")}
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2"
                          >
                            <FaUpload className="text-blue-600" /> Import Excel
                          </li>
                        )}
                      </ul>
                    </div>
              )}
            </div>
            {hasPermission("company-filter") && (
            <Button
              type="button"
              onClick={openFiltersPanel}
              variant="outlinePrimary"
              className="flex items-center relative"
            >
              <FaFilter className="mr-1" />
              <span className="hidden md:inline">Filter</span>
              {activeFiltersCount > 0 && (
                <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
            )}
          </div>
          )}
      </div>

      {/* OffCanvas for Filters */}
      <OffCanvas
        open={filtersOpen}
        setOpen={setFiltersOpen}
        title="Filter Companies"
        width="w-full sm:w-[500px]"
        footer={
          <div className="flex justify-between items-center gap-4 w-full">
            <Button
              type="button"
              variant="clearButton"
              onClick={() => clearAllFiltersOffCanvas(true)}
              // disabled={activeFiltersCount === 0 && Object.values(tempFilters).every(v => v === '')}
              className="flex items-center gap-2 disabled:opacity-50"
             >
              Clear Filters
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="cancelButton" onClick={cancelFiltersOffCanvas}>
                Cancel
              </Button>
              <Button type="button" variant="applyFilter" onClick={applyFiltersFromOffCanvas}>
                Apply Filters
              </Button>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-6 py-2">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div ref={suggestionsRef} className="relative">
              <SearchableSelect
                label="Company Name"
                name="companyName"
                value={tempFilters.companyName ? { value: tempFilters.companyName, label: tempFilters.companyName } : null}
                onChange={(sel) => setTempFilters(t => ({ ...t, companyName: sel?.value || '' }))}
                // Use async loader so SearchableSelect handles input changes
                loadOptions={loadCompanyOptions}
                pageSize={10}
                preloadOnOpen={true}
                placeholder="Search by company name..."
                isClearable
              />
            </div>
            <div>
              <Input
                label="Executive Name"
                name="executiveName"
                value={tempFilters.executiveName}
                onChange={(e) => setTempFilters(t => ({ ...t, executiveName: e.target.value }))}
                placeholder="Search by executive name..."
              />
            </div>
            <div>
              <Input
                label="Contact"
                name="companyContact"
                value={tempFilters.companyContact}
                onChange={(e) => setTempFilters(t => ({ ...t, companyContact: e.target.value }))}
                placeholder="Search by contact..."
              />
            </div>
            <div>
              <Input
                label="Email"
                name="companyEmail"
                value={tempFilters.companyEmail}
                onChange={(e) => setTempFilters(t => ({ ...t, companyEmail: e.target.value }))}
                placeholder="Search by email..."
              />
            </div>
            <div>
              <SearchableSelect
                label="Supporting Staff"
                name="supportStaffName"
                value={staffOptions.find(o => String(o.value) === String(tempFilters.supportStaffName)) || null}
                onChange={(sel) => setTempFilters(t => ({ ...t, supportStaffName: sel?.value || '' }))}
                options={staffOptions}
                placeholder="All Staff"
                isClearable
              />
            </div>
            <div>
              <SearchableSelect
                label="Client Type"
                name="clientType"
                value={clientTypeOptions.find(opt => opt.value === tempFilters.clientType) || null}
                onChange={(sel) => setTempFilters(t => ({ ...t, clientType: sel?.value || '' }))}
                options={clientTypeOptions}
                placeholder="All Types"
                isClearable
              />
            </div>
            <div>
              <SearchableSelect
                label="Status"
                name="status"
                value={statusOptions.find(opt => opt.value === tempFilters.status) || null}
                onChange={(sel) => setTempFilters(t => ({ ...t, status: sel?.value || '' }))}
                options={statusOptions}
                placeholder="All Status"
                isClearable
              />
            </div>
          </div>
        </div>
      </OffCanvas>

      {/* Assign Staff OffCanvas */}
      <OffCanvas
        open={assignOpen}
        setOpen={setAssignOpen}
        title={`Assign Staff (${selectedRows.length} selected)`}
        width="w-full sm:w-[420px]"
        footer={
          <div className="flex justify-end items-center gap-2 w-full">
            <div className="flex-1 text-sm text-gray-600">
              {selectedRows.length === 0
                ? "Select companies from the list to assign staff."
                : `You are assigning staff to ${selectedRows.length} company(ies).`}
            </div>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={() => setAssignOpen(false)} disabled={assignLoading}>
                Cancel
              </Button>
              <Button type="button" variant="primary" onClick={handleAssignConfirm} disabled={assignLoading || selectedRows.length === 0 || !assignStaff}>
                {assignLoading ? "Assigning..." : "Assign"}
              </Button>
            </div>
          </div>
        }
      >
        <div className="py-2">
          <div className="mb-3">
            <label className="custom-label">Choose Staff</label>
            <SearchableSelect
              name="assignStaff"
              value={staffOptions.find(o => String(o.value) === String(assignStaff)) || null}
              onChange={(sel) => setAssignStaff(sel?.value || "")}
              options={staffOptions}
              placeholder="Select staff..."
              isClearable
            />
          </div>
          <div className="text-xs text-gray-500">If the staff you want is not listed, please add them in the Support Staff section first.</div>
        </div>
      </OffCanvas>

   

      <div className="w-full">
        {isInitialLoading ? (
          <TableSkeleton rows={perPage} />
        ) : companies.length === 0 ? (
            // Custom No Data Component
            <div className="bg-white min-h-80 rounded-lg shadow-sm border border-gray-200  flex items-center justify-center relative">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-gray-400 mb-2">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                     >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    No Companies Found
                  </h3>
                  <p className="text-sm text-gray-500 text-center max-w-sm">
                    {(
                      filters.companyName ||
                      filters.executiveName ||
                      filters.companyContact ||
                      filters.companyEmail ||
                      filters.clientType ||
                      filters.status
                    )
                      ? "No companies match your current search criteria. Try adjusting your filters."
                      : "No companies have been added yet. Click 'Add Company' to get started."}
                  </p>
                </div>
              {isInitialLoading && ( // Loading overlay for the "No Data" state
                  <div
                    className="absolute bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
                    style={{ top: "40px", bottom: "60px", left: 0, right: "18px" }}
                  >
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 rounded-full animate-bounce bg-blue-600"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full animate-bounce bg-blue-600"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full animate-bounce bg-blue-600"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
            </div>
        ) : (
              <div className="relative overflow-hidden flex flex-col h-[calc(100vh-120px)] bg-white rounded-lg shadow-sm border border-gray-200">
                <DataTable
                  columns={columns}
                  data={companies}
                  responsive
                  selectableRows={String(userType) !== "5" && hasPermission("company-delete")}
                  onSelectedRowsChange={handleRowSelected}
                  sortServer
                  onSort={handleSort}
                  clearSelectedRows={clearSelectedRowsToggle}
                  pagination
                  paginationServer
                  paginationTotalRows={totalRows}
                  paginationDefaultPage={currentPage}
                  paginationPerPage={perPage}
                  paginationRowsPerPageOptions={[15, 25, 50, 100]}
                  onChangeRowsPerPage={handlePerRowsChange}
                  onChangePage={handlePageChange}
                  highlightOnHover
                  striped
                  dense
                  fixedHeader
                  fixedHeaderScrollHeight="100%"
                  defaultSortFieldId={sortField}
                  className="react-dataTable h-full flex flex-col"
                  customStyles={customStyles}
                  noDataComponent={
                    <div className="flex flex-col items-center justify-center py-12 px-4">
                      <div className="text-gray-400 mb-2">
                        <svg
                          className="w-16 h-16 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        No companies found
                      </h3>
                      <p className="text-sm text-gray-500 text-center max-w-sm">
                        {filters.companyName ||
                        filters.executiveName ||
                        filters.companyContact ||
                        filters.companyEmail ||
                        filters.clientType ||
                        filters.status
                          ? "No companies match your current search criteria. Try adjusting your filters."
                          : "No companies have been added yet. Click 'Add Company' to get started."}
                      </p>
                    </div>
                  }
                  progressComponent={<TableSkeleton rows={perPage} />}
                  progressPending={isSearching || isFilterLoading}
                  persistTableHead
                />
              </div>
          )}
      </div>

      {/* Confirm Delete Modal */}
      {showConfirmModal && (
        <ConfirmModal
          open={showConfirmModal}
          onClose={handleCancelConfirm}
          onConfirm={handleConfirm}
          title="Confirm Delete"
          message={confirmMessage}
          confirmText="Delete"
          cancelText="Cancel"
          danger={true}
          requireInput={true}
          requiredInputValue="Delete"
          inputValue={confirmInput}
          setInputValue={setConfirmInput}
          loading={isFilterLoading}
          icon={<BsFillTrash3Fill className="text-red-600 text-xl" />}
        />
      )}

      {/* Company detail OffCanvas */}
      <OffCanvas
        open={showCompanyCanvas}
        setOpen={(v) => {
          if (!v) closeCompanyCanvas();
        }}
        title={companyView?.company_name || "Company Details"}
        width="w-full sm:w-[700px]"
      >
        <div className="p-4">
          {companyView ? (
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  {companyView.company_logo ? (
                    <img src={companyView.company_logo} alt={companyView.company_name} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7v10a2 2 0 0 0 2 2h14V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" /></svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{companyView.company_name || '—'}</h3>
                  <div className="text-sm text-gray-600">{companyView.client_type ? companyView.client_type : ''}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-500">Executive</div>
                  <div className="font-medium">{companyView.executive_name || '—'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Contact</div>
                  <div className="font-medium">{companyView.mobile || companyView.contact || '—'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium">{companyView.email || companyView.company_email || '—'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Status</div>
                  <div className="font-medium">{companyView.status || '—'}</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Address</div>
                <div className="font-medium">{companyView.company_address || companyView.address || '—'}</div>
              </div>
            </div>
          ) : (
            <div className="text-gray-500">No company selected</div>
          )}
        </div>
      </OffCanvas>

      {/* Status Toggle Modal */}
      {showStatusConfirmModal && statusToggleRow && (
        <ConfirmModal
          open={showStatusConfirmModal}
          onClose={handleCancelStatusToggle}
          onConfirm={handleConfirmStatusToggle}
          title="Confirm Status Change"
          message={`Are you sure you want to ${
            statusToggleRow.status === "Active" ? "In-active" : "Active"
          } the company "${statusToggleRow.company_name}"?`}
          confirmText={statusToggleRow.status === "Active" ? "In-active" : "Active"}
          cancelText="Cancel"
          danger={statusToggleRow.status === "Active"}
          icon={
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                statusToggleRow.status === "Active" ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <svg
                className={`w-6 h-6 ${
                  statusToggleRow.status === "Active" ? "text-red-600" : "text-green-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {statusToggleRow.status === "Active" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
              </svg>
            </div>
          }
        />
      )}
    </div>
    </>
  );
}
