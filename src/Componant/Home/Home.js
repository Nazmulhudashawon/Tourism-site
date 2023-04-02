import React from 'react';
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import './Home.css'
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';
import Airelines from '../airelines/Airelines';
import Experience from '../experience/Experience';

const Home = () => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });
    return (
        <div className="home">
            <Banner></Banner>

<QueryClientProvider client={client}>
                <Suspense fallback={<><div class="spinner-border text-info mt-4" role="status">
               </div> <div><span>Loading...</span></div>  </>}>
                <Travel></Travel>
             </Suspense>
</QueryClientProvider>
            <Experience></Experience>
             <Airelines></Airelines>

        </div>
    );
};

export default Home;