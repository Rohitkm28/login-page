import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { UserContext } from './UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext); 

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li>Hello, {user.username}</li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
