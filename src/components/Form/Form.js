import React, {useState} from "react";
import './Form.css';

const Form = ({ onDataUpdate }) => {

   
    const [tooltipData, setTooltipData] = useState({
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

    
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log(name);
      tooltipData[name] = value;
      setTooltipData({
        ...tooltipData,
        [name]: value,
      });

      onDataUpdate(tooltipData);
      console.log(tooltipData);
    };
  
    return (
      <div className="form-container">
        <form>
          <label>
            Target Element:
            <select name="targetElement" value={tooltipData.targetElement} onChange={handleInputChange}>
              <option value="">Select an element</option>
              <option value="button1">Button 1</option>
              <option value="button2">Button 2</option>
              <option value="button3">Button 3</option>
              <option value="button4">Button 4</option>
              <option value="button5">Button 5</option>
            </select>
          </label>
          <label>
            Tooltip Text:
            <input type="text" name="tooltipText" value={tooltipData.tooltipText} onChange={handleInputChange} />
          </label>
          <div className="size-padding">
            <label>
              Text Size:
              <input type="text" name="textSize" value={tooltipData.textSize} onChange={handleInputChange} />
            </label>
            <label>
              Padding:
              <input type="text" name="padding" value={tooltipData.padding} onChange={handleInputChange} />
            </label>
          </div>
          <label>
            Text Color:
            <input type="text" name="textColor" value={tooltipData.textColor} onChange={handleInputChange} />
          </label>
          <label>
            Background Color:
            <input type="text" name="backgroundColor" value={tooltipData.backgroundColor} onChange={handleInputChange} />
          </label>
          <div className="radius-width">
            <label>
              Corner Radius:
              <input type="text" name="cornerRadius" value={tooltipData.cornerRadius} onChange={handleInputChange} />
            </label>
            <label>
              Tooltip Width:
              <input type="text" name="tooltipWidth" value={tooltipData.tooltipWidth} onChange={handleInputChange} />
            </label>
          </div>
          <div className="arrow-size">
            <label>
              Arrow Width:
              <input type="text" name="arrowWidth" value={tooltipData.arrowWidth} onChange={handleInputChange} />
            </label>
            <label>
              Arrow Height:
              <input type="text" name="arrowHeight" value={tooltipData.arrowHeight} onChange={handleInputChange} />
            </label>
          </div>
        </form>
      </div>
    );
  };
  
  
  export default Form;


