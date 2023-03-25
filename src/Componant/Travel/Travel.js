import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TravelData from './TravelData';

const Travel = () => {
    const [Travels, setTravels] = useState([]);
    useEffect(() => {
        fetch('https://flyair.onrender.com/services').then(res => res.json()).then(data => setTravels(data) )
        

    }, [])
    
    return (
        <div className="mt-4 ">
            <h3>Ours Special Travels</h3>
           
           <div class="row" >
                {
                    Travels.map(Travel => <TravelData Travel={Travel} key={Travel.key}></TravelData>)
                }
            </div>
           

        </div>
    );
};

export default Travel;