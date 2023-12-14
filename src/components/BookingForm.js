import React, { useState } from 'react';

export default function BookingForm(){
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission will go here
    console.log({ date, time, guests, occasion });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="grid max-w-xs gap-5"
    >
      <label htmlFor="res-date" className="text-gray-700">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border-2 rounded p-2"
      />

      <label htmlFor="res-time" className="text-gray-700">Choose time</label>
      <select 
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border-2 rounded p-2"
      >
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests" className="text-gray-700">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="border-2 rounded p-2"
      />

      <label htmlFor="occasion" className="text-gray-700">Occasion</label>
      <select 
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="border-2 rounded p-2"
      >
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type="submit" 
        value="Make Your Reservation" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
};
