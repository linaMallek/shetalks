import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <form>
      <label htmlFor="date">Select a date:</label>
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </form>
  );
}

export default MyForm