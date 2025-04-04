import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../design/AnimationDesign.css'

const Animation = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(waveRef.current, 
      { x: '-20%' }, // Start from left 50% out of view
      {
        x: '0%', // Move to starting position
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        duration: 7,
        ease: "power1.inOut"
      }
    );
  }, []);

  return (
    <footer>
      <div className="background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="100%"
          height="200px"
          viewBox="0 0 1600 200"
          preserveAspectRatio="xMidYMax slice"
          style={{
            position: 'absolute',
            top: 'unset',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '600px',
            transform: 'scale(1)',
            transformOrigin: 'bottom',
            boxSizing: 'border-box',
            display: 'block',
            pointerEvents: 'none',
            zIndex: 0, // Ensure it is behind the content
          }}
        >
          <defs>
            <linearGradient id="bg">
              <stop offset="0%" style={{ stopColor: 'rgba(108, 99, 255, 0.06)' }}></stop>
              <stop offset="100%" style={{ stopColor: 'rgba(108, 99, 255, 0.6)' }}></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,100.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0s293.985-39.278,505.474-5.859
                s493.475,48.368,716.963-4.995v200.106H-363.852V100.589z"
              ref={waveRef}
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                dur="10s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 100; -334 50; 270 100"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                dur="8s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 100; -334 50; 270 100"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                dur="6s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 100; -334 50; 270 100"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <div className="footer-content">
  <p>© 2024 Saheeshna Kamuni. All rights reserved.</p>
  <div className="social-links">
  <a href="https://github.com/saheeshnakamuni0905" target="_blank" rel="noopener noreferrer">
      <img src="/images/github.png" alt="Instagram" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/saheeshna-kamuni-30a09b62/" target="_blank" rel="noopener noreferrer">
      <img src="/images/linkedin-logo.png" alt="LinkedIn" className="social-icon" />
    </a>
    <a href="mailto:kamuni.s@northeastern.edu" target="_blank" rel="noopener noreferrer">
      <img src="/images/outlook.png" alt="Outlook" className="social-icon" />
    </a>
  </div>
</div>
     </footer>
  );
};

export default Animation;
