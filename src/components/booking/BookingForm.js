import React, { useState } from 'react';

export default function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const validateForm = () => {
    const errors = {};
    if (!date) errors.date = 'Date is required';
    if (!time) errors.time = 'Time is required';
    if (parseInt(guests) < 1 || parseInt(guests) > 10) errors.guests = 'Guests must be between 1 and 10';
    if (!occasion) errors.occasion = 'Occasion is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ date, time, guests, occasion });
      setBookingSuccess(true);
      setTimeout(() => setBookingSuccess(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      {bookingSuccess && (
        <div className="mb-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your booking has been made.</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 p-8 bg-primary-dark bg-opacity-80 rounded-lg shadow-lg max-w-2xl w-full"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <label htmlFor="res-date" className="text-primary-light text-lg font-semibold">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border-2 font-bold bg-primary-light bg-opacity-60 border-primary-light rounded-lg p-4 text-lg text-primary-dark"
        />
        {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}

        <label htmlFor="res-time" className="text-primary-light text-lg font-semibold">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border-2 font-bold  bg-primary-light bg-opacity-60 border-primary-light  rounded-lg p-4 text-lg text-primary-dark"
        >
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>
        {formErrors.time && <p className="text-red-500">{formErrors.time}</p>}

        <label htmlFor="guests" className="text-primary-light text-lg font-semibold">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border-2 font-bold bg-primary-light bg-opacity-60 border-primary-light rounded-lg p-4 text-lg text-primary-dark"
          min="1"
          max="10"
        />
        {formErrors.guests && <p className="text-red-500">{formErrors.guests}</p>}

        <label htmlFor="occasion" className="text-primary-light text-lg font-semibold">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="border-2 font-bold bg-primary-light bg-opacity-60 border-primary-light rounded-lg p-4 text-lg text-primary-dark"
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formErrors.occasion && <p className="text-red-500">{formErrors.occasion}</p>}

        <button
          type="submit"
          className="bg-primary-dark border-2 border-primary-light hover:bg-primary-light text-primary-light font-bold py-3 px-6 rounded-lg cursor-pointer text-lg"
        >
          Make Your Reservation
        </button>
      </form>
    </div>
  );
}
