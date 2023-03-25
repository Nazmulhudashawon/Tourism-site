import React from 'react';
import './Hotel.css'
const Hotel = () => {
    return (
        <div className="hotel">
            <h2>Get the Best Rates on Hotel Booking</h2>
          <div className="hotel-content">
          <div>
            <h6>Enter City</h6>
            <input type="name" value=""  />
            </div>
            <div className='mt-3'>
            <h6>Check in Date</h6>
            <input type="date" id="start" name="trip-start"
       value="2022-01-01"
       min="2022-01-01" max="2022-12-31"/>
            </div>
            <div className='mt-3'>
            <h6>Check out Date </h6>
            <input type="date" id="start" name="trip-start"
       value="2022-01-02"
       min="2022-01-02" max="2022-12-31"/>
            </div>
          </div>
            <button className="btn btn-danger ">Search Hotel </button>     
               </div>
    );
};

export default Hotel;