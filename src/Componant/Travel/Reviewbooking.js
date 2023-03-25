import React, { useEffect, useState } from 'react';
import Reservation from './Reservation';
const Reviewbooking = () => {
    const [user, setuser]=useState([]);
    useEffect(()=>{
        fetch('https://flyair.onrender.com/users/').then(res=>res.json()).then(data=>setuser(data))
    },[]);

    
    return (
        <div>
            <h2 className="m-4">Your {user.length} Tour Booking is success</h2>
                    
               { user.map(users => <Reservation key={users._id} users={users}></Reservation>)}
            
        </div>
    );
};

export default Reviewbooking;