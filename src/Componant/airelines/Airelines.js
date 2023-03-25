import React from 'react';
import './Airelines.css'

const Airelines = () => {
    return (
        <div className="airlines ">
            <h3>Search for Top Airlines</h3>
           <div className="air">
           
           <div><h5><a href="https://www.biman-airlines.com/" target="_blank">Biman Bangladesh Airlines</a></h5></div>
            <div><h5><a  href="https://usbair.com/" target="_blank"> Us Bangla Airlines </a></h5></div>
            <div><h5> <a href="https://www.emirates.com/" target="_blank"> Emirates </a> </h5></div>
           </div>
           <div className="air">
           <div><h5><a href="https://www.qatarairways.com/en-bd/homepage.html" target="_blank">Qatar Airways</a></h5></div>
            <div><h5><a  href="https://www.singaporeair.com/en_UK/bd/home#/book/bookflight/" target="_blank"> Singapore Airlines </a></h5></div>
            <div><h5> <a href="https://wwws.airfrance.fr/en" target="_blank">Air France </a> </h5></div>
           
           </div>
        </div>
    );
};

export default Airelines;