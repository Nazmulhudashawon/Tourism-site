import React from 'react';
import './Airelines.css'

const Airelines = () => {
    return (
        <div className="airlines ">
            <h2>Search for other Top Airlines</h2>
           <div className="air">
           
           <div><h5><a href="https://www.biman-airlines.com/" target="_blank">Biman Bangladesh Airlines</a></h5></div>
            <div><h5><a  href="https://usbair.com/" target="_blank"> Us Bangla Airlines </a></h5></div>
            <div><h5> <a href="https://www.emirates.com/" target="_blank"> Emirates </a> </h5></div>
           </div>
           <div className="air">
           <div><h5>Indo-Bangla Airelines</h5></div>
            <div><h5>Malaysia Airelines</h5></div>
            <div><h5>Thai Aireways</h5></div>
           </div>
        </div>
    );
};

export default Airelines;