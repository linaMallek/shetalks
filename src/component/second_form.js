import React, { useState } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';

import NumberAndDateForm from '../component/third_form';
import GenderForm from '../component/first_form';

function YesNoCheckbox({ isChecked, onCheckboxChange, onPreviousClick, onNextClick }) {
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
            onChange={onCheckboxChange}
          />
          Yes
        </label>

       <label>
          <input
            type="checkbox"          
            checked={!isChecked}
            onChange={onCheckboxChange}
          />
          No
        </label></div>
        
        <div class="button-container">
        <button type="submit" className='green-button' onClick={onPreviousClick}>
        Previous
      </button>
        <button type="submit" className='red-button' onClick={onNextClick}>
        Next
      </button>
       
        </div>
      
      </div>
     
    </div>
  );
}

export default YesNoCheckbox;
