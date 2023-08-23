import React from 'react'
import './MobileEmulator.css';
import Tooltip from '../Tooltip/Tooltip';

function MobileEmulator({ ToolTipData }) {
    
    return (
        <div className="phone-container">
        
          <div className="phone-screen">
          {ToolTipData.targetElement && <Tooltip
            classN={ToolTipData.targetElement}
            text="Hello, I'm a tooltip!"
            padding="10px"
            textColor="#fff"
            backgroundColor="red"
            showTooltip={true}
            arrowWidth="10px"
            arrowHeight="10px"
            cornerRadius="7px"
            />
          }
          <div>
            <button className="top-left-button">Button 1</button>
          </div>
            
            <button className="top-right-button">Button 2</button>
            <button className="bottom-left-button">Button 3</button>
            <button className="bottom-right-button">Button 4</button>
            <button className="center-button">Button 5</button>
          </div>
        </div>
    );
  
}

export default MobileEmulator;
