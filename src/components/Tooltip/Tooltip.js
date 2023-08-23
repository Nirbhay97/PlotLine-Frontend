import React from 'react';
import './Tooltip.css';


const Tooltip = ({classN, text, textColor, padding, backgroundColor, arrowWidth, arrowHeight, cornerRadius}) => {

  const styles = {
    "backgroundColor": backgroundColor,
    "color": textColor,
    "padding": padding,
    "bordeRadius" : cornerRadius,
  }

  return(

      <div className={classN}>
        <div className="custom-tooltip">
          <span style={styles} className="custom-tooltip-text">{text}</span>
        </div>
      </div>    
  )
}


export default Tooltip;