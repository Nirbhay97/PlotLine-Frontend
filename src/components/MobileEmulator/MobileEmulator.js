import React from 'react'
import './MobileEmulator.css';
import Tooltip from '../Tooltip/Tooltip';

function MobileEmulator({ ToolTipData }) {
    
    console.log(ToolTipData);
    return (
        <div className="phone-container">
        
          <div className="phone-screen">
          <button className="top-left-button">Button1</button>
          <button className="top-right-button">Button2</button>
          <Tooltip
            text="Hello, I'm a tooltip!"
            padding="10px"
            textColor="#fff"
            backgroundColor="gray"
            showTooltip={true}
            arrowWidth="10px"
            arrowHeight="10px"
            />
            <button className="bottom-left-button">Button3</button>
            <button className="bottom-right-button">Button4</button>
            <button className="center-button">Button5</button>
          </div>
        </div>
    );
  
}

export default MobileEmulator;
