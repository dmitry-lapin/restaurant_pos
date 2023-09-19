import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div>
        <h2>Select Date and Time</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          
        />
      </div>
    );
  };

  export default DateTimePicker; 