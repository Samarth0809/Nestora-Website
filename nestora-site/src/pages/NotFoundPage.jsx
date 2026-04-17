import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Hardening: Log route misses to console (can be passed to analytics)
    console.warn(`[Route Miss] Attempted to access undefined route: ${location.pathname}`);
  }, [location]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#475569', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '30px', background: '#0f172a', color: 'white', textDecoration: 'none', fontWeight: 600 }}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
