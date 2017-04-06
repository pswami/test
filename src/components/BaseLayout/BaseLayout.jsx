import React from 'react';
import './style.scss';

const BaseLayout = ({ children }) => {
  return (
    <div className="baseLayout">
      {children}
    </div>
  );
};

export default BaseLayout;