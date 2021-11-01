import React, { useState } from 'react';
import './Reservation.css'

const Reservation = (props) => {
    const [user, setuser]=useState([]);
    const {name, email, phone, date1, date2, _id, location}=props.users;
    console.log(name)
   //delete an user
   const handledelete=(id)=>{
    const proceed=window.confirm ('are you sure want to Cancel the tour')
    if(proceed){
       const url=`https://frightful-cheateau-06054.herokuapp.com/${id}`;
       fetch(url, {
          method:'DELETE'
      }).then(res=>res.json()).then(data=>{if (data.deletedCount > 0){
          alert("cancel success");
          const remainingusers= user.filter(users=> users._id !==id);
          setuser(remainingusers);
      }} )
    }      
}
    return (
        <div>
          <table className="table">
              <tr>
                  <td> Name: </td>
                  <td>{name}</td>
              </tr>
              <tr>
                  <td>  Email: </td>
                  <td>{email}</td>
              </tr>
              <tr>
                  <td>  location: </td>
                  <td>{location}</td>
              </tr>
              <tr>
                  <td> Phone : </td>
                  <td>{phone} </td>
              </tr>
          </table>
          <button className="btn btn-danger" onClick={()=>handledelete(_id)}>Cancel Tour</button>
        </div>
    );
};

export default Reservation;

