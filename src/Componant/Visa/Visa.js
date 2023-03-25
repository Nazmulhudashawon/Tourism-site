import React from 'react';

const Visa = () => {
    return (
        <div className="hotel">
            <h2>Get the Best Visa Assistance</h2>
          <div className="hotel-content">
          <div>
            <h6>Enter Country</h6>
            <input type="name" value=""  />
            </div>
            <div className='mt-3'>
            <h6>Arrival Date</h6>
            <input className='h6-0' type="date" id="start" name="trip-start"
       value="2021-11-15"
       min="2021-11-01" max="2022-12-31"/>
            </div>
            <div className='mt-3'>
            <h6>Departure Date </h6>
            <input type="date" id="start" name="trip-start"
       value="2021-11-15"
       min="2021-11-01" max="2022-12-31"/>
            </div>
            <div className='mt-3'>
                <h6>Passenger</h6>
                <select name="num_adults" id="num_adults">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
            </div>
            <div className='mt-3'>
            <h6>Nationality</h6>
            <input type="name" value=""  />
            </div>
          </div>
            <button className="btn btn-danger">View Offer</button>     
               </div>
    );
};

export default Visa;