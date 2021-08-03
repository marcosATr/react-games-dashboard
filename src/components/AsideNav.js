import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function AsideNav(props) {
  return (
    <nav className="navbar flex column ml1">
      {props.links.map(link => (
        <Link
          to={link.url}
          className="white font-small mt1 border-right-animated"
          key={link.text}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

export default AsideNav;
