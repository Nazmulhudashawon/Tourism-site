import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./Experience.css"
import img1 from '../../../src/data/person 1.jpg'
import img2 from '../../../src/data/person2.jpg'
import img3 from '../../../src/data/person3.jpg'
import img4 from '../../../src/data/person4.jpg'
import img5 from '../../../src/data/person5.jpg'
import img6 from '../../../src/data/person6.jpg'

const Experience = () => {
  return (
    <div className="mt-4 ">
      <h3>Travelar's Experience</h3>
      <Container>
        <div class="row">
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <img  src={img1} alt="" />
                <h5 className="card-title ">Tanha Islam</h5>
                <div className="body">
                  <p>Last month i have booked a travel package. it was awesome tour with this agency</p>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
              <img  src={img2} alt="" />
                <h5 className="card-title">Mejanul chowdury</h5>
                <div className="body">
                  <p>
                      Tour management policy is so nice of FlyAir
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
              <img  src={img3} alt="" />
                <h5 className="card-title">Anamika Hasan</h5>
                <div className="body">
                  <p>The tour package rate is regionable with good services.</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
              <img  src={img4} alt="" />
                <h5 className="card-title ">Jorge alan</h5>
                <div className="body">
                  <p>Best travel agency i have ever seen</p>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
              <img  src={img5} alt="" />
                <h5 className="card-title">Alex sansos</h5>
                <div className="body">
                  <p>All services are awesome of it</p>
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
              <img  src={img6} alt="" />
                <h5 className="card-title">Kenedi Hoque</h5>
                <div className="body">
                  <p>My experince is so nice of the agency</p>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
