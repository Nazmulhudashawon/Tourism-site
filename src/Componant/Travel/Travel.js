import React, { useEffect, useState } from 'react';
import TravelData from './TravelData';

const Travel = () => {
    const [Travels, setTravels] = useState([]);
    useEffect(() => {
        fetch('https://frightful-cheateau-06054.herokuapp.com/services').then(res => res.json()).then(data => setTravels(data) )
        

    }, [])
    
    return (
        <div className="mt-4 ">
            <h2>Ours Special Travels</h2>
            <div class="row mx-4">
                {
                    Travels.map(Travel => <TravelData Travel={Travel} key={Travel.key}></TravelData>)
                }
            </div>

        </div>
    );
};

export default Travel;