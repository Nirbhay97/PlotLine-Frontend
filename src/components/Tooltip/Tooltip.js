import React from "react";
import "./Tooltip.css";

const Tooltip = (props) => {

  const tooltipStyles = {
    backgroundColor: props.ToolTipData.backgroundColor || "gray",
    color: props.ToolTipData.textColor || "#fff",
    padding: props.ToolTipData.padding + "px" || "5px 10px",
    fontSize: props.ToolTipData.textSize + "px" || "14px",
    borderRadius: props.ToolTipData.cornerRadius + "px" || "1px",
    width: props.ToolTipData.tooltipWidth + "px" || "1rem",
  };

  
  const tooltipContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "50px",
    marginTop: "2px",
  };

  function setMargin (newMargin){
    document.documentElement.style.setProperty('--tooltip-margin', newMargin + 'px');
  }

  function setArrowHeight(newHeight){
    document.documentElement.style.setProperty('--tooltip-arrow-size', newHeight + 'px');
  }

  function setArrowWidth(newWidth){
    document.documentElement.style.setProperty('--tooltip-arrow-size', newWidth + 'px');
  }

  function setTipBackgroundColor(newColor){
    document.documentElement.style.setProperty('--tooltip-background-color', newColor);
  }
  if(props.ToolTipData.arrowHeight) setArrowHeight(props.ToolTipData.arrowHeight);
  if(props.ToolTipData.arrowWidth) setArrowWidth(props.ToolTipData.arrowWidth);
  if(props.ToolTipData.backgroundColor) setTipBackgroundColor(props.ToolTipData.backgroundColor);

  return (
     <div className="Tooltip-Wrapper">
      {props.children}
      {props.active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`} style={tooltipStyles}>
          {props.uploadedImage && setMargin(90)}
          {props.uploadedImage && <img
              src={URL.createObjectURL(props.uploadedImage)}
              alt="Tooltip Image"
              style={ tooltipContainerStyles }

          />}
          {props.ToolTipData.tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
