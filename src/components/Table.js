import React, { useState, useContext } from 'react';
import { GameDataContext } from '../UserContext.js';
import { Link } from 'react-router-dom';
import './Table.css';

function Table() {
  //consume the values and methods shared via provider
  const { games, setGames } = useContext(GameDataContext);
  // console.log(games);
  return (
    <>
      <div className="box mv2 small-overflow-scroll z1">
        <table className="tableWrapper table full-width mv2 p2">
          <thead className="font-normal">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Platform</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody className="foont-small">
            {games.map(game => (
              <tr key={game.id}>
                <td>
                  <Link to={`/${game.id}`}>{game.title}</Link>
                </td>
                <td>{game.genre}</td>
                <td>{game.platform}</td>
                <td>{game.release}</td>
                {console.log(game.id)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
