import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';




const Home = () => {
    return (
        <div className="home">


            <Banner></Banner>
            <Travel></Travel>
            

        </div>
    );
};

export default Home;