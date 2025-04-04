import React from 'react';
import { useNavigate } from 'react-router-dom';

const Link = ({ to, children, className, onClick, disableTransition }) => {
  const navigate = useNavigate();

  const handleClicked = (e) => {
    if (onClick) {
      onClick(e);
    }
    e.preventDefault();
    if (!disableTransition) {
      const bubbles = document.getElementById('bubbles');
      bubbles?.classList.add('show');

      setTimeout(() => navigate(to), 1000);

      setTimeout(() => {
        bubbles?.classList.remove('show');
        bubbles?.classList.add('hide');
      }, 1200);

      setTimeout(() => {
        bubbles?.classList.remove('hide');
      }, 2400);
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClicked} className={className}>
      {children}
    </a>
  );
};

export default Link;
