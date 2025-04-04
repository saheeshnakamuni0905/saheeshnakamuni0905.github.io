import React from 'react';
import '../design/BubblesDesign.css';

const Bubbles = ({ duration = 1200, colorStart = '#6c63ff', colorEnd = '#ffffff' }) => {
  return (
    <div id="bubbles">
      <div 
        style={{
          animationDuration: `${duration}ms`,
          background: colorStart
        }}
        className='bubbles__first'
      />
      <div 
        style={{
          animationDuration: `${duration}ms`,
          background: colorEnd
        }}
        className='bubbles__second'
      />
    </div>
  );
};

export default Bubbles;
