import React from 'react';
import './MobileEmulator.css';
import Tooltip from '../Tooltip/Tooltip';
import Button from '../Button/Button';

function MobileEmulator({ ToolTipData, uploadedImage }) {

  return (
    <div className="phone-container">
      <div className="phone-screen">
        <div className="top-left-button">
          <Tooltip 
            ToolTipData={ToolTipData}
            direction="bottom" 
            uploadedImage={uploadedImage}
            active={ToolTipData.targetElement==='button1'}>
            <span><Button buttonName="Button1"/></span>
          </Tooltip>
        </div>

        <div className="top-right-button">
          <Tooltip 
            ToolTipData={ToolTipData} 
            uploadedImage={uploadedImage}
            direction="bottom"
            active={ToolTipData.targetElement==='button2'}>
           <span><Button buttonName="Button2"/></span>
          </Tooltip>
        </div>

        <div className="bottom-left-button">
          <Tooltip ToolTipData={ToolTipData} 
            direction="top" 
            uploadedImage={uploadedImage}
            active={ToolTipData.targetElement==='button4'}>
            <span><Button buttonName="Button4"/></span>
          </Tooltip>
        </div>

        <div className="bottom-right-button">
          <Tooltip ToolTipData={ToolTipData} direction="top"
            uploadedImage={uploadedImage}
            active={ToolTipData.targetElement==='button5'}>
            <span><Button buttonName="Button5"/></span>
          </Tooltip>
        </div>

        <div className="center-button">
          <Tooltip ToolTipData={ToolTipData} direction="bottom"
            uploadedImage={uploadedImage}
            active={ToolTipData.targetElement==='button3'}>
            <span><Button buttonName="Button3"/></span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default MobileEmulator;
