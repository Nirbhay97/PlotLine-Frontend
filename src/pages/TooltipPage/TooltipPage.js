import React, { useRef, useState } from 'react';
import MobileEmulator from '../../components/MobileEmulator/MobileEmulator';
import Form from '../../components/Form/Form';
import './TooltipPage.css';

function TooltipPage() {

  const [selectedButton, setSelectedButton] = useState(null);

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

  const buttonRefs = {
    button1: useRef(null),
    button2: useRef(null),
    button3: useRef(null),
    button4: useRef(null),
    button5: useRef(null),
  }

  const handleUpdatedTooltipData = (data, selectedButton) => {
    console.log('Form data updated:', data);
    setToopTipData(data);
  };

  return (
    <>
    <div className='toolTipPage'>
      <Form onDataUpdate={handleUpdatedTooltipData} buttonRefs={buttonRefs} setSelectedButton={setSelectedButton}/>
      <MobileEmulator ToolTipData={ToolTipData} selectedButton={selectedButton} targetRef={selectedButton}/>
    </div>
    </>  
  )
}

export default TooltipPage;
