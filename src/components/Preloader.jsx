import React, { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 4;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setExiting(true);

          setTimeout(() => {
            onComplete?.();
          }, 550);
        }, 250);
      }

      setProgress(value);
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`aurabuds-preloader ${exiting ? "loader-exit" : ""}`}>
      {/* Background glow */}
      <div className="preloader-orb orb-one" />
      <div className="preloader-orb orb-two" />

      {/* Fine grid */}
      <div className="preloader-grid" />

      <div className="preloader-content">

        {/* Top label */}
        <div className="preloader-top">
          <span>EST. 2026</span>
          <span>WIRELESS AUDIO</span>
        </div>

        {/* Center product */}
        <div className="earbud-stage">

          <div className="sound-ring ring-one" />
          <div className="sound-ring ring-two" />
          <div className="sound-ring ring-three" />

          {/* Earbud */}
          <div className="earbud">
            <div className="earbud-head">
              <div className="earbud-highlight" />
            </div>

            <div className="earbud-stem">
              <div className="stem-light" />
            </div>
          </div>

          {/* Sound waves */}
          <div className="wave wave-left">
            <span />
            <span />
            <span />
          </div>

          <div className="wave wave-right">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Brand */}
        <div className="brand-reveal">
          <h1>AURABUDS</h1>
          <div className="brand-line" />
          <p>POWERING YOUR SOUND</p>
        </div>

        {/* Bottom progress */}
        <div className="loader-bottom">

          <div className="loader-progress-row">
            <span>INITIALIZING</span>
            <strong>{String(progress).padStart(3, "0")}%</strong>
          </div>

          <div className="loader-progress">
            <div
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

      </div>

      {/* Exit flash */}
      <div className="preloader-flash" />
    </div>
  );
};

export default Preloader;