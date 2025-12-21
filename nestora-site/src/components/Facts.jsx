import { useEffect, useState } from 'react';
import './Facts.css';
import LogoLoop from './LogoLoop';

const Facts = () => {
  const facts = [
    { id: 1, value: '10-15 min', label: 'Delivery Time' },
    { id: 2, value: 'Zero', label: 'Expired Orders' },
    { id: 3, value: '100%', label: 'Local Inventory' },
    { id: 4, value: '2x', label: 'Kirana Revenue' },
    { id: 5, value: '99.9%', label: 'Uptime' },
    { id: 6, value: '500+', label: 'Partner Kiranas' },
    { id: 7, value: '24/7', label: 'Support' },
    { id: 8, value: '30%', label: 'Average Cost Savings' },
  ];

  const [loopHeight, setLoopHeight] = useState(96);
  const [loopGap, setLoopGap] = useState(48);
  const [loopSpeed, setLoopSpeed] = useState(90);

  useEffect(() => {
    const updateLoopMetrics = () => {
      const width = window.innerWidth;
      let height = 108;
      let gap = 52;
      let speed = 95;

      if (width >= 1920) {
        height = 120;
        gap = 60;
        speed = 105;
      } else if (width >= 1440) {
        height = 112;
        gap = 56;
        speed = 100;
      } else if (width >= 1280) {
        height = 104;
        gap = 48;
        speed = 92;
      } else if (width >= 1024) {
        height = 92;
        gap = 40;
        speed = 84;
      } else if (width >= 768) {
        height = 78;
        gap = 32;
        speed = 76;
      } else if (width >= 640) {
        height = 68;
        gap = 28;
        speed = 68;
      } else {
        height = 60;
        gap = 24;
        speed = 62;
      }

      setLoopHeight(height);
      setLoopGap(gap);
      setLoopSpeed(speed);
    };

    updateLoopMetrics();
    window.addEventListener('resize', updateLoopMetrics);
    return () => window.removeEventListener('resize', updateLoopMetrics);
  }, []);

  return (
    <section className="facts-section">
      <LogoLoop
        logos={facts.map(f => ({
          node: (
            <div className="fact-loop-item" aria-hidden={true} key={f.id}>
              <h3 className="fact-value">{f.value}</h3>
              <p className="fact-label">{f.label}</p>
            </div>
          ),
          title: f.label,
          key: f.id
        }))}
        speed={loopSpeed}
        direction="left"
        width="100%"
        logoHeight={loopHeight}
        gap={loopGap}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Key metrics loop"
      />
    </section>
  );
};

export default Facts;

