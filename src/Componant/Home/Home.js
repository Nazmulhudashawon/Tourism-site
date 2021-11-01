import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';
import Airelines from '../airelines/Airelines';




const Home = () => {
    return (
        <div className="home">


            <Banner></Banner>
            <Travel></Travel>
            <Airelines></Airelines>
            

        </div>
    );
};

export default Home;