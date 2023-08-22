import React, { useState } from 'react';
import MobileEmulator from '../../components/MobileEmulator/MobileEmulator';
import Form from '../../components/Form/Form';
import './TooltipPage.css';

function TooltipPage() {

  const [ToolTipData, setToopTipData] = useState({
      targetElement: '',
      tooltipText: '',
      textSize: '14px',
      padding: '10px',
      textColor: '#000',
      backgroundColor: '#fff',
      cornerRadius: '0px',
      tooltipWidth: '200px',
      arrowWidth: '10px',
      arrowHeight: '10px',
  });

  const handleUpdatedTooltipData = (data) => {
    console.log('Form data updated:', data);
    setToopTipData(data);
  };

  return (
    <>
    <div className='toolTipPage'>
      <Form onDataUpdate={handleUpdatedTooltipData}/>
      <MobileEmulator ToolTipData={ToolTipData}/>
    </div>
    </>  
  )
}

export default TooltipPage;
