import React, { useState } from "react";
import './Tooltip.css';

const Tooltip = ({ children, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <button 
        onMouseEnter={() => setShowTooltip(true)} 
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </button>
      {showTooltip && <div className="tooltip">{content}</div>}
    </div>
  );
}

export default Tooltip;