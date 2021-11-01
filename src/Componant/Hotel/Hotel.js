import React from 'react';
import './Hotel.css'
const Hotel = () => {
    return (
        <div className="hotel">
            <h2>Get the Best Rates on Hotel Booking</h2>
          <div className="hotel-content">
          <div>
            <p>Enter City</p>
            <input type="name" value=""  />
            </div>
            <div>
            <p>Check in Date</p>
            <input type="date" id="start" name="trip-start"
       value="2021-11-15"
       min="2021-11-01" max="2022-12-31"/>
            </div>
            <div>
            <p>Check out Date </p>
            <input type="date" id="start" name="trip-start"
       value="2021-11-15"
       min="2021-11-01" max="2022-12-31"/>
            </div>
          </div>
            <button className="btn btn-warning">Search Hotel</button>     
               </div>
    );
};

export default Hotel;