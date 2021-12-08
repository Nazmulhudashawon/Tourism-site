import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar style={{ backgroundColor: '#374f55',height:'100%',overflow: 'hidden' }} variant={'dark'} expand="lg">
      <div className="container-fluid">
        <Navbar.Brand>
          <h4>FlyAir</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="menubar">
            <button className="button">{user.displayName}</button>

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user.email && (
              <Nav.Link as={Link} to="/booking">
                <button className=" button">My Reservation</button>
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/hotel">
              Hotel
            </Nav.Link>
            <Nav.Link as={Link} to="/visa">
              visa
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About
            </Nav.Link>

            {user.email ? (
              <button className=" button" onClick={logout}>
                logout
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            {!user.email && (
              <Nav.Link as={Link} to="/signup">
                Create Account
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
