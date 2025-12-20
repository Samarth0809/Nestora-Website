import { useEffect, useState } from 'react';
import './Facts.css';
import LogoLoop from './LogoLoop';

const Facts = () => {
  const facts = [
    { id: 1, value: '10-15 min', label: 'Delivery Time' },
    { id: 2, value: 'Zero', label: 'Expired Orders' },
    { id: 3, value: '100%', label: 'Local Inventory' },
    { id: 4, value: '2x', label: 'Kirana Revenue' },
  ];

  const [loopHeight, setLoopHeight] = useState(80);
  const [loopGap, setLoopGap] = useState(40);
  const [loopSpeed, setLoopSpeed] = useState(80);

  useEffect(() => {
    const updateLoopMetrics = () => {
      const width = window.innerWidth;
      let height = 80;
      let gap = 40;
      let speed = 80;

      if (width <= 1024) {
        height = 68;
        gap = 28;
        speed = 70;
      }

      if (width <= 640) {
        height = 58;
        gap = 22;
        speed = 60;
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
      <div className="container">
        <div className="facts-loop-container">
          {/* Facts rendered inside the LogoLoop for continuous horizontal looping */}
          <div
            className="facts-loop-wrapper"
            style={{ height: `${loopHeight + 16}px` }}
          >
            <LogoLoop
              logos={facts.map(f => ({
                node: (
                  <div className="fact-loop-item" aria-hidden>
                    <h3 className="fact-value">{f.value}</h3>
                    <p className="fact-label">{f.label}</p>
                  </div>
                ),
                title: f.label
              }))}
              speed={loopSpeed}
              direction="left"
              width="100vw"
              style={{
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)',
                height: `${loopHeight}px`
              }}
              logoHeight={loopHeight}
              gap={loopGap}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Key metrics loop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;

