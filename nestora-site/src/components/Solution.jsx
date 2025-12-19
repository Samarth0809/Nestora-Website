import React from 'react';
import { Smartphone, ShieldCheck, Truck, MapPin } from 'lucide-react';
import './Solution.css';

const Solution = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Solution</span>
          <h2>Empowering Local Commerce</h2>
        </div>
        <div className="solution-content">
          <div className="solution-text animate-fade-in">
            <h3>A Full-Stack OS for Kiranas</h3>
            <p>
              Nestora provides a comprehensive platform that digitizes inventory, manages orders, and handles delivery. 
              We turn existing kirana clusters into a networked, asset-light dark-store alternative.
            </p>
            <ul className="solution-features">
              <li>
                <div className="feature-icon-wrapper">
                  <Smartphone className="feature-icon" />
                </div>
                <div className="feature-content">
                  <strong>Kirana OS</strong>
                  <p>Digitized inventory & billing in one transparent system.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon-wrapper">
                  <ShieldCheck className="feature-icon" />
                </div>
                <div className="feature-content">
                  <strong>Expiry Shield</strong>
                  <p>Smart scanning blocks stale inventory before dispatch.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon-wrapper">
                  <Truck className="feature-icon" />
                </div>
                <div className="feature-content">
                  <strong>Tamper-Proof Delivery</strong>
                  <p>Professional runners with secure handling.</p>
                </div>
              </li>
              <li>
                <div className="feature-icon-wrapper">
                  <MapPin className="feature-icon" />
                </div>
                <div className="feature-content">
                  <strong>Hyper-Local Fulfillment</strong>
                  <p>Delivering from the nearest shop, not a dark store.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="solution-visual animate-fade-in">
            {/* Enhanced App Mockup */}
            <div className="mockup-card">
              <div className="mockup-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                <div className="mockup-url-bar">nestora.app/dashboard</div>
              </div>
              <div className="mockup-body">
                <div className="app-interface">
                  <div className="app-sidebar">
                    <div className="sidebar-icon active"></div>
                    <div className="sidebar-icon"></div>
                    <div className="sidebar-icon"></div>
                  </div>
                  <div className="app-main">
                    <div className="app-header-row">
                      <span className="store-name">Gupta General Store</span>
                      <span className="status-badge">🟢 Online</span>
                    </div>
                    <div className="stats-row">
                      <div className="stat-box">
                        <span className="stat-label">Orders</span>
                        <span className="stat-val">24</span>
                      </div>
                      <div className="stat-box">
                        <span className="stat-label">Revenue</span>
                        <span className="stat-val">₹8.2k</span>
                      </div>
                    </div>
                    <div className="live-orders-list">
                      <div className="order-item">
                        <div className="order-icon">📦</div>
                        <div className="order-info">
                          <span className="order-id">#4092 - 2 items</span>
                          <span className="order-time">2 mins ago</span>
                        </div>
                        <button className="action-btn">Pack</button>
                      </div>
                      <div className="order-item">
                        <div className="order-icon">📦</div>
                        <div className="order-info">
                          <span className="order-id">#4091 - 5 items</span>
                          <span className="order-time">5 mins ago</span>
                        </div>
                        <button className="action-btn">Ready</button>
                      </div>
                    </div>
                  </div>
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
