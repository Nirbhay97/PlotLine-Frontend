import React from "react";
import "./Tooltip.css";

const Tooltip = (props) => {

  const tooltipStyles = {
    backgroundColor: props.ToolTipData.backgroundColor || 'gray',
    color: props.ToolTipData.textColor || '#fff',
    padding: props.ToolTipData.padding || '5px 10px',
    fontSize: props.ToolTipData.textSize || '14px',
    borderRadius: props.ToolTipData.cornerRadius || '1px',
    width: props.ToolTipData.tooltipWidth,
  };

  return (
    <div className="Tooltip-Wrapper">
      {props.children}
      {props.active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`} style={tooltipStyles}>
          {props.ToolTipData.tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
