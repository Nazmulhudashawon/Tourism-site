
import React from 'react';
import './TravelData.css'


import { Link } from 'react-router-dom';

const TravelData = (props) => {
    
    const {_id, name, img, duration, price } = props.Travel;
    

    return (

        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 maindiv mx-0 px-0 gx-0" >
            <div className="Travelscard px-0 gx-0 mx-0 my-4">
                <img src={img} alt="..." />
                <div className="card-body p-0">
                    <h5 className="card-title">{name}</h5>
                   <div className="body">
                   <p>Package: {duration}  </p>
                    <p className='p-2'> Cost: {price}/person</p>
                   </div>
                    
                    <Link to={`/tourform/${_id}`}>
                      <button className="btn btn-primary"> Select Offer</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};
export default TravelData;

