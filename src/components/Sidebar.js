import React from 'react';
import { Link } from 'react-router-dom';
import { CgGames, CgList } from 'react-icons/cg';
import { GiGameConsole } from 'react-icons/gi';
import { BiPencil } from 'react-icons/bi';
import './Sidebar.css';
import AsideNav from './AsideNav';
import LoginInfo from './LoginInfo';

function Sidebar({ visible, toggleSidebar }) {
  const platforms = [
    { text: 'PC', url: '/' },
    { text: 'XBOX', url: '/' },
    { text: 'Playstation', url: '/' }
  ];
  const categories = [
    { text: 'MMO', url: '/' },
    { text: 'RPG', url: '/' },
    { text: 'Playstation', url: '/' }
  ];

  let asideClasses = 'flex column box-shadow1 sidebar';
  if (visible) {
    asideClasses += ' sidebarReveal';
  }

  return (
    <>
      <aside className={asideClasses}>
        <div className="height-equalizer flex">
          <Link to="/" className="logo bold white va-middle">
            <CgGames className="va-middle" />
            <span className="va-middle">Game Watch</span>
          </Link>
        </div>
        <div className="mt2 p2 border-right-animated">
          <CgList className="nearWhite va-middle" />
          <span className="nearWhite uppercase bold ml1 va-middle">
            Categorias
          </span>
          <AsideNav name="Categories" links={categories} />
        </div>
        <div className="mt2 p2 border-right-animated">
          <GiGameConsole className="nearWhite va-middle" />
          <span className="nearWhite bold uppercase ml1 va-middle">
            Platforms
          </span>
          <AsideNav name="Platform" links={platforms} />
        </div>
        <div className="mt2 p2 border-right-animated">
          <Link
            to="/cadastrar"
            className="bold white va-middle"
            onClick={() => toggleSidebar(!visible)}
          >
            <BiPencil className="nearWhite va-middle" />
            <span className="nearWhite bold uppercase ml1 va-middle">
              Cadastrar
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
