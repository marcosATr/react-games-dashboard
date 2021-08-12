import React, { useState, useContext } from 'react';
import './style.css';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';
import TopBar from './components/TopBar';
import FilterSection from './components/FilterSection';
import Table from './components/Table';
import Register from './components/Register';
import ListSingle from './components/ListSingle';
import Editing from './components/Editing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GameDataContext, data } from './UserContext';

export default function App() {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  //display and manipulate the data with useState
  const [games, setGames] = useState(data);
  console.log(useState(games));
  return (
    <>
      <Router>

        <GameDataContext.Provider value={{ games, setGames }}>
          <div className="flex">
            <Sidebar
              visible={sidebarVisibility}
              toggleSidebar={name => setSidebarVisibility(name)}
            />
            <Wrapper>
              <TopBar
                toggleSidebar={name => setSidebarVisibility(name)}
                visible={sidebarVisibility}
              />
              <Switch>
                <Route exact path="/">
                  <FilterSection />
                  <Table />
                </Route>
                <Route exact path="/cadastrar">
                  <Register />
                </Route>
                <Route exact path="/:id">
                  <ListSingle />
                </Route>
                <Route exact path="/:id/edit">
                  <Editing />
                </Route>
              </Switch>
            </Wrapper>
          </div>
        </GameDataContext.Provider>
      </Router>
    </>
  );
}
