import React, { useEffect, useState } from 'react';
import Reservation from './Reservation';
const Reviewbooking = () => {
    const [user, setuser]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users/').then(res=>res.json()).then(data=>setuser(data))
    },[]);

    
    return (
        <div>
            {/* { user.length > 0 ? congratulations your tour confirmation is success : No tour plan is selected } */}
            <ul>
               { user.map(users => <Reservation key={users._id} users={users}></Reservation>)}
            </ul>
        </div>
    );
};

export default Reviewbooking;