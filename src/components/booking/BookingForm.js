import React, { useState } from 'react';

export default function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const validateForm = () => {
    const errors = {};
    if (!date) errors.date = 'Date is required';
    if (!time) errors.time = 'Time is required';
    if (guests < 1 || guests > 10) errors.guests = 'Guests must be between 1 and 10';
    if (!occasion) errors.occasion = 'Occasion is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log({ date, time, guests, occasion });
      setBookingSuccess(true);
      // Reset form after submission
      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('');
      // Hide success message after 3 seconds
      setTimeout(() => setBookingSuccess(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-16 my-10">
      {bookingSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your booking has been made.</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg grid gap-5 p-10 shadow-lg rounded bg-white"
      >
        <label htmlFor="res-date" className="text-gray-700 text-lg">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border-2 rounded p-2 text-lg"
        />
        {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}

        <label htmlFor="res-time" className="text-gray-700 text-lg">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border-2 rounded p-2 text-lg"
        >
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>
        {formErrors.time && <p className="text-red-500">{formErrors.time}</p>}

        <label htmlFor="guests" className="text-gray-700 text-lg">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border-2 rounded p-2 text-lg"
        />
        {formErrors.guests && <p className="text-red-500">{formErrors.guests}</p>}

        <label htmlFor="occasion" className="text-gray-700 text-lg">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="border-2 rounded p-2 text-lg"
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formErrors.occasion && <p className="text-red-500">{formErrors.occasion}</p>}

        <input
          type="submit"
          value="Make Your Reservation"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg cursor-pointer"
        />
      </form>
    </div>
  );
};
