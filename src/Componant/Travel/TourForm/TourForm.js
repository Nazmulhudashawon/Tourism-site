import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './TourForm.css'

const TourForm = () => {
  const history=useHistory();
    const phoneref=useRef();
    const locationref=useRef();
    const { id } = useParams();
    const {user}=useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlecheckout=(e)=>{
      
        const name =user.displayName;
        const email=user.email;
        const phone=phoneref.current.value;
        const packagename=locationref.current.value;
        const newuser={name:name, email:email, packagename:packagename, phone:phone}
        fetch('https://frightful-cheateau-06054.herokuapp.com/users', {
      method:'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newuser)
    })
    .then(res=>res.json()).then(data=> {if(data.insertedId){alert("Your Tour is confirmed for any query please contact us")
    e.target.reset();
       }})
        e.preventDefault();

    }
    
  
    return (
       <div className="tour">
           
           <form onSubmit={handlecheckout} className="form" >
            <h2>Reservation Form</h2>
            <p>Tour Code: {id}</p>

            <div className="tour-content">
              <div>
              <label>Name</label>
            <input defaultValue={user.displayName} {...register(" Name") }  />
            </div>
            
            
            <div>
            <label>Email</label>
             <input className="w-100" defaultValue={user.email}  {...register("email")}  /></div>
             <div>
               <label> Contact No</label>
           <input ref={phoneref}  placeholder="Phone" />
           </div>
          
            
            <div><label >Tour Package Name</label>
            <br />
            <input ref={locationref}   /></div>

           
       <div>  
            <label >Arrival Date</label>    
            <input type="date" id="start" name="trip-start"
       value="2021-11-15"
       min="2021-11-01" max="2022-12-31"/>
          </div>

         <div>
         <label >Departure Date</label>
            <input type="date" id="end" name="trip-end"
          value="2021-11-20"
          min="2021-11-20" max="2022-12-31"/>
         </div>
           <div>
           <label>Person</label>
            <select name="num_adults" id="num_adults">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
           </div>
					
            <div>
            <label>Total Room</label>
            <select name="num_adults" id="num_adults">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
					
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            </div>
          
            <button className="btn btn-warning" type="submit" value="Proceed To Checkout">Proceed To Checkout</button> 
           
        </form>
           </div>
       
    );
};

export default TourForm;