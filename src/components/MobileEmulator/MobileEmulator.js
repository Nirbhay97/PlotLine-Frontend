import React from 'react';
import './MobileEmulator.css';
import Tooltip from '../Tooltip/Tooltip';

function MobileEmulator({ ToolTipData }) {

  console.log(ToolTipData.targetElement);

  return (
    <div className="phone-container">
      <div className="phone-screen">
        <div className="top-left-button">
          <Tooltip 
            ToolTipData={ToolTipData}
            direction="bottom" 
            active={ToolTipData.targetElement==='button1'}>
            <span><button>Button1</button></span>
          </Tooltip>
        </div>

        <div className="top-right-button">
          <Tooltip 
            ToolTipData={ToolTipData} 
            direction="bottom"
            active={ToolTipData.targetElement==='button2'}>
            <span><button>Button2</button></span>
          </Tooltip>
        </div>

        <div className="bottom-left-button">
          <Tooltip ToolTipData={ToolTipData} direction="top" 
            active={ToolTipData.targetElement==='button4'}>
            <span><button>Button4</button></span>
          </Tooltip>
        </div>

        <div className="bottom-right-button">
          <Tooltip ToolTipData={ToolTipData} direction="top"
            active={ToolTipData.targetElement==='button5'}>
            <span><button>Button5</button></span>
          </Tooltip>
        </div>

        <div className="center-button">
          <Tooltip ToolTipData={ToolTipData} direction="bottom"
            active={ToolTipData.targetElement==='button3'}>
            <span><button>Button3</button></span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default MobileEmulator;
