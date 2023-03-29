import React, { useState } from 'react';
import '../App.css';
import DatePicker from "../component/date";
import MyForm from '../component/date';


function NumberAndDateForm() {
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Number: ${number}, Date: ${date}`);
  };

  return (
    <div className="overlay">
      <div className="left-section">
        <img src="image.png" alt="description de l'image" />
      </div>
      <div className='ligne'></div>
      <div className='right-section '>
      <div className='h1'><h1>Required Information</h1></div>
      <form onSubmit={handleSubmit}>
       <label>
       <h3 className='h31'>How long is your menstrual cycle?</h3> <br></br>
        <input type="number" className='btnN' value={number} onChange={(e) => setNumber(e.target.value)} /></label>
      <br />
      <label>   
      <h3 className='h32'>When was the first day of your last period?</h3>  
      
        <input className='btnN 'type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br /> 
      <div class="button-container">
        <button type="submit" className='green-button'>
        Previous
      </button>
        <button type="submit" className='red-button'>
        Next
      </button>
       
     </div>
    </form>
     </div>
    </div>
  );
}

export default NumberAndDateForm;
