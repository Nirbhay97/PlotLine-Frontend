import React from 'react';
import './Tooltip.css';


const Tooltip = ({text}) => {
  return(
      <div style={{
          textAlign:'center',
          margin:'10%'
      }}>
          <div class="custom-tooltip">Hover to see tooltip
              <span class="custom-tooltip-text">{text}</span>
          </div>
          
      </div>
  )
}


export default Tooltip;