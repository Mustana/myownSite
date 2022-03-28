
import React, { useState } from 'react';

import Popup from 'reactjs-popup';
//

const Popuped = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popuped;







