import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TravelData from './TravelData';
import { useQuery } from 'react-query';
import Query from './Query';

export default function Travel ({services}) {
    const {data} = useQuery("services",() => Query());
   
    
    return (
        <div className="mt-4 ">
            <h3>Ours Special Travels</h3>
           
           <div class="row" >
                {
                    data?.map(Travel => <TravelData Travel={Travel} key={Travel.key}></TravelData>)
                }
            </div>
           

        </div>
    );
};

