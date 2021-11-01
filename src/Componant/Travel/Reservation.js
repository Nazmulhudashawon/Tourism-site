import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './Reservation.css'

const Reservation = (props) => {
    const [user, setuser]=useState([]);
    const location=useLocation()
    const {name, email, phone, date1, date2, _id, packagename}=props.users;
    console.log(name)
   //delete an user
   const handledelete=(id)=>{
       console.log(id)
    const proceed=window.confirm ('are you sure want to Cancel the tour')
    if(proceed){
       const url=`https://frightful-cheateau-06054.herokuapp.com/users/${id}`;
       fetch(url, {
          method:'DELETE'
      }).then(res=>res.json()).then(data=>{if (data.deletedCount > 0){
          alert("cancel success");
          const remainingusers= user.filter(users=> users._id !==id);
          setuser(remainingusers);
          window.location.reload()
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
                  <td>  Package Name: </td>
                  <td>{packagename}</td>
              </tr>
              <tr>
                  <td> Phone : </td>
                  <td>{phone} </td>
              </tr>
              <tr>
                  <td> Arrival Date : </td>
                  <td>{date1} </td>
              </tr>
              <tr>
                  <td> Departure Date : </td>
                  <td>{date2} </td>
              </tr>
          </table>
          <button className="btn btn-danger m-4" onClick={()=>handledelete(_id)}>Cancel Tour</button>
        </div>
    );
};

export default Reservation;

