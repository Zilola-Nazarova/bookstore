import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import { BsFillPersonFill } from 'react-icons/bs';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <nav className="navbar">
    <h1><NavLink to="/">Bookstore CMS</NavLink></h1>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
    <NavLink to="#">
      <div className="profile">
        <BsFillPersonFill
          color="#0290ff"
          size="22px"
        />
      </div>
    </NavLink>
  </nav>
);

export default Navbar;
