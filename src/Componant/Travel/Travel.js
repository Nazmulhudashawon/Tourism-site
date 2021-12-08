import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TravelData from './TravelData';

const Travel = () => {
    const [Travels, setTravels] = useState([]);
    useEffect(() => {
        fetch('https://frightful-cheateau-06054.herokuapp.com/services').then(res => res.json()).then(data => setTravels(data) )
        

    }, [])
    
    return (
        <div className="mt-4 ">
            <h2>Ours Special Travels</h2>
           <Container>
           <div class="row" >
                {
                    Travels.map(Travel => <TravelData Travel={Travel} key={Travel.key}></TravelData>)
                }
            </div>
           </Container>

        </div>
    );
};

export default Travel;