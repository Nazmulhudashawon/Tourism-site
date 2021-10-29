import Button from '@restart/ui/esm/Button';
import React from 'react';
import './TravelData.css'

import { useHistory } from 'react-router';

const TravelData = (props) => {
    const history = useHistory()
    const { name, img, duration, price } = props.Travel;
    const handlebtn = () => {
        // history.push("./AppointForm");


    }

    return (

        <div className="col-md-4 col-sm-6 col-12">
            <div className="Travelscard">
                <img src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-title">{duration}</p>
                    <p className="card-title">{price}</p>
                    
                    <button onClick={handlebtn} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>

    );
};
export default TravelData;

