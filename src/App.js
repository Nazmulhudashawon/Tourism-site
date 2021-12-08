import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import Header from "./Componant/Header/Header";
import Home from "./Componant/Home/Home";
import Login from './Componant/Login/Login'
import Signup from "./Componant/signup/Signup";
import Footer from './Componant/Footer/Footer';

import AuthProvider from './Context/AuthProvider';
import Aboutus from './Componant/Aboutus/Aboutus';

import NotFound from './Componant/Page Not Found/NotFound';
import TourForm from './Componant/Travel/TourForm/TourForm';
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';
import Reviewbooking from './Componant/Travel/Reviewbooking';
import Hotel from './Componant/Hotel/Hotel';
import Visa from './Componant/Visa/Visa';


function App() {
  return (
    <div className="App">
      <div className="content">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/aboutus">
              <Aboutus></Aboutus>
            </Route> 
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/hotel">
              <Hotel></Hotel>
            </Route>
            <Route exact path="/visa">
              <Visa></Visa>
            </Route>
           
            <PrivateRoute exact path="/tourform/:id">
              <TourForm></TourForm>
            </PrivateRoute>
            <PrivateRoute exact path="/booking">
              <Reviewbooking></Reviewbooking>
            </PrivateRoute>
            
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
       
      </AuthProvider>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
