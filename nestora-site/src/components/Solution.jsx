import React from "react";
import { Smartphone, ShieldCheck, Truck, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";
import "./Solution.css";

const Solution = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">Our Solution</span>
          <h2>Empowering Local Commerce at Scale</h2>
        </div>

        <div className="solution-content">

          {/* LEFT: Text */}
          <div className="solution-text animate-fade-in">
            <h3>A Full-Stack Operating System for Kiranas</h3>
            <p>
              Nestora transforms neighborhood kiranas into a high-speed,
              hyper-local commerce network. We digitize inventory, orchestrate
              fulfillment, and enable 10-minute delivery—without dark stores.
            </p>

            <ul className="solution-features">
              <li>
                <TiltCard className="feature-card-tilt">
                  <div className="feature-inner">
                    <div className="feature-icon-wrapper">
                      <Smartphone className="feature-icon" />
                    </div>
                    <div className="feature-content">
                      <strong>Kirana OS</strong>
                      <p>Inventory, billing, and orders—fully digitized.</p>
                    </div>
                  </div>
                </TiltCard>
              </li>

              <li>
                <TiltCard className="feature-card-tilt">
                  <div className="feature-inner">
                    <div className="feature-icon-wrapper">
                      <ShieldCheck className="feature-icon" />
                    </div>
                    <div className="feature-content">
                      <strong>Expiry Shield</strong>
                      <p>Smart checks prevent stale or expired dispatches.</p>
                    </div>
                  </div>
                </TiltCard>
              </li>

              <li>
                <TiltCard className="feature-card-tilt">
                  <div className="feature-inner">
                    <div className="feature-icon-wrapper">
                      <Truck className="feature-icon" />
                    </div>
                    <div className="feature-content">
                      <strong>Tamper-Proof Delivery</strong>
                      <p>Verified runners and sealed handovers.</p>
                    </div>
                  </div>
                </TiltCard>
              </li>

              <li>
                <div className="feature-icon-wrapper">
                  <MapPin className="feature-icon" />
                </div>
                <div className="feature-content">
                  <strong>Hyper-Local Fulfillment</strong>
                  <p>Orders fulfilled from the nearest kirana.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: Visual */}
          <div className="solution-visual animate-fade-in">
            <div className="visual-backdrop" />

            <div className="mockup-card glass-panel">
              {/* Mock Browser Header */}
              <div className="mockup-header">
                <div className="window-controls">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="mockup-url-bar">
                  🔒 nestora.app/dashboard
                </div>
              </div>

              {/* App UI */}
              <div className="mockup-body">
                <div className="app-interface">

                  {/* Sidebar */}
                  <aside className="app-sidebar">
                    <div className="sidebar-logo">N</div>
                    <div className="sidebar-menu">
                      <span className="sidebar-icon active" />
                      <span className="sidebar-icon" />
                      <span className="sidebar-icon" />
                      <span className="sidebar-icon" />
                    </div>
                    <div className="sidebar-user" />
                  </aside>

                  {/* Main */}
                  <main className="app-main">
                    <div className="app-header-row">
                      <div className="store-info">
                        <span className="store-name">
                          Gupta General Store
                        </span>
                        <span className="store-location">
                          Sector 4, HSR Layout
                        </span>
                      </div>
                      <span className="status-badge pulse-dot">
                        Online
                      </span>
                    </div>

                    <div className="stats-grid">
                      <div className="stat-box">
                        <span className="stat-label">Today's Orders</span>
                        <span className="stat-val">42</span>
                        <span className="stat-trend up">+12%</span>
                      </div>

                      <div className="stat-box">
                        <span className="stat-label">Revenue</span>
                        <span className="stat-val">₹12,450</span>
                        <span className="stat-trend up">+8%</span>
                      </div>
                    </div>

                    <div className="section-title-sm">
                      Live Orders
                    </div>

                    <div className="live-orders-list">
                      <div className="order-item new-order">
                        <div className="order-left">
                          <span className="order-icon">🔔</span>
                          <div className="order-info">
                            <span className="order-id">
                              #4092 · 2 items
                            </span>
                            <span className="order-time">
                              Just now
                            </span>
                          </div>
                        </div>
                        <button className="action-btn primary">
                          Accept
                        </button>
                      </div>

                      <div className="order-item">
                        <div className="order-left">
                          <span className="order-icon">📦</span>
                          <div className="order-info">
                            <span className="order-id">
                              #4091 · 5 items
                            </span>
                            <span className="order-time">
                              2 min ago
                            </span>
                          </div>
                        </div>
                        <button className="action-btn outline">
                          Packing
                        </button>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
