import React from 'react';
import '../App.css';
import YesNoCheckbox from '../component/second_form';
import NumberAndDateForm from '../component/third_form';
import RegistrationForm  from '../component/first_form';

function ParentComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('All form data submitted!');
  };

  return (
    <div>
      <h1>Welcome to the Parent Component!</h1>
      <form onSubmit={handleSubmit}>
      <NumberAndDateForm />
       <RegistrationForm  />
        <YesNoCheckbox />
       
        
        <button type="submit">Submit All Forms</button>
      </form>
    </div>
  );
}

export default ParentComponent;
