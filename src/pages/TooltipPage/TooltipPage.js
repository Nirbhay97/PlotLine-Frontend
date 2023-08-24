import React, { useState } from 'react';
import MobileEmulator from '../../components/MobileEmulator/MobileEmulator';
import Form from '../../components/Form/Form';
import './TooltipPage.css';

function TooltipPage() {

  const [selectedButton, setSelectedButton] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

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

  const handleUpdatedTooltipData = (data, selectedButton) => {
    console.log('Form data updated:', data);
    setToopTipData(data);
  };

  return (
    <>
      <div className='toolTipPage'>
        <Form onDataUpdate={handleUpdatedTooltipData} setSelectedButton={setSelectedButton} setUploadedImage={setUploadedImage}/>
        <MobileEmulator ToolTipData={ToolTipData} selectedButton={selectedButton} uploadedImage={uploadedImage} />
      </div>
    </>  
  )
}

export default TooltipPage;
