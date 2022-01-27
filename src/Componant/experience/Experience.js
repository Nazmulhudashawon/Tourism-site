import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "./Experience.css"

const Experience = () => {
  return (
    <div className="mt-4 ">
      <h1>Travelar's Experience</h1>
      <Container>
        <div class="row">
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <h5 className="card-title m-4">Rakibul Islam</h5>
                <div className="body">
                  <p>last month i have booked a travel package. it was awesome tour with this agency</p>
                </div>
                <Button>Details</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <h5 className="card-title m-4">mejanul choudury</h5>
                <div className="body">
                  <p>
                      tour management policy is so nice of FlyAir
                  </p>
                </div>
                <Button>Details</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <h5 className="card-title m-4">Anamika hasan</h5>
                <div className="body">
                  <p>the tour package rate is regionable with good services.</p>
                </div>
                <Button>Details</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <h5 className="card-title m-4">Abu jar gifari</h5>
                <div className="body">
                  <p>best travel agency i have ever seen</p>
                </div>
                <Button>Details</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <h5 className="card-title m-4">alex sansos</h5>
                <div className="body">
                  <p>The services is awesome of it</p>
                </div>
                <Button>Details</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 maindiv">
            <div className="experienceCard">
              <div className="card-body">
                <h5 className="card-title m-4">jamaika rahman</h5>
                <div className="body">
                  <p>my experince is so nice of the agency</p>
                </div>
                <Button>Details</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
