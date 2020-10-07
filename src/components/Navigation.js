import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 
// import SignOutButton from '../SignOut';
// import * as ROUTES from '../../constants/routes';
 
const Navigation = ({ user }) => (
  <div>{user ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
 
function NavigationAuth() {
  let location = useLocation();
  return (

    <ul>
    <li>
      <Link to="/landing" className={location.pathname === "/landing" ? "nav-link active" : "nav-link"} >Landing</Link>
    </li>
    <li>
      <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"} >Home</Link>
    </li>
    <li>
      <Link to="/account" className={location.pathname === "/account" ? "nav-link active" : "nav-link"} >Account</Link>
    </li>
    <li>
      {/* <SignOutButton /> */}
    </li>
  </ul>
    )
};
 
function NavigationNonAuth() {
  let location = useLocation();
  return (

    <ul>
    <li>
      <Link to="/landing" className={location.pathname === "/landing" ? "nav-link active" : "nav-link"} >Landing</Link>
    </li>
    <li>
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >Sign In</Link>
    </li>
  </ul>
    )
};

export default Navigation;