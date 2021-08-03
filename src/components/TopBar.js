import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';
import { CgMenu, CgGames } from 'react-icons/cg';
import LoginInfo from './LoginInfo';

function TopBar(props) {
  return (
    <>
      <div className="topbar-nav box">
        <div className="hiddenOnLarge">
          <Link to="/" className="logo bold white va-middle">
            <CgGames className="va-middle" />
            <span className="va-middle">Game Watch</span>
          </Link>
        </div>
        <div className="flex center white font-large row menuHolder">
          <CgMenu
            className="hiddenOnLarge va-middle"
            onClick={() => props.toggleSidebar(!props.visible)}
          />
        </div>

        <LoginInfo setStyles="hiddenOnSmall" />
      </div>
    </>
  );
}

export default TopBar;
