import React, { useState } from 'react';
import '../App.css';

function YesNoCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div className="overlay">
      <div className="left-section">
        <img src="image.png" alt="description de l'image" />
      </div>
      <div className='ligne'></div>
      <div className='right-section '>
        <div className='h1'><h1>Required Information</h1></div>
        <h3>Do you agree to track your menstrual cycle in our Platform?</h3>
        <div  className='checkbox'>
         <label>
          <input
            type="checkbox"
            checked={isChecked}
          
            onChange={handleCheckboxChange}
          />
          Yes
        </label>

       <label>
          <input
            type="checkbox"          
            checked={!isChecked}
            onChange={handleCheckboxChange}
          />
          No
        </label></div>
        
        <div class="button-container">
        <button type="submit" className='green-button'>
        Previous
      </button>
        <button type="submit" className='red-button'>
        Next
      </button>
       
        </div>
      
      </div>
     
    </div>
  );
}

export default YesNoCheckbox;
