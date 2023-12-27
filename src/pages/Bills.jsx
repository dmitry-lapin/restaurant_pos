import React, { useState } from 'react';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  return (
    <div>
      <h2>Select Date and Time</h2>
      
      <input
        type="datetime-local"
        value={selectedDate.toISOString().slice(0, -8)}
        onChange={handleDateChange}
        className=''
      />
    </div>
  );
  };

  export default DateTimePicker; 