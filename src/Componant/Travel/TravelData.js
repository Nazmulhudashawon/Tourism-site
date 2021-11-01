import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TravelData.css'

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const TravelData = (props) => {
    
    const {_id, name, img, duration, price } = props.Travel;
    
    

    return (

        <div className="col-md-4 col-sm-6 col-12">
            <div className="Travelscard">
                <img src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                   <div className="body">
                   <p>Package: {duration} </p>
                    <p>  Cost :{price}/person</p>
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

