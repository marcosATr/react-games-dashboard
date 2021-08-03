import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ListSingle.css';
import { GameDataContext } from '../UserContext.js';
import { Link } from 'react-router-dom';

const ListSingle = () => {
  const { games } = useContext(GameDataContext);
  const { id } = useParams();

  const findMatch = () => {
    const results = games.filter((game, index) => {
      if (game.id == id) {
        return game;
      }
    });
    return results;
  };
  const [activeGame] = findMatch();

  return (
    <div className="box p2 flex column">
      <div className="flex row wrap">
        <div className="p2">
          <img src={'https://via.placeholder.com/150x250'} />
        </div>
        <div className="nearWhite p2">
          <h1>{activeGame.title}</h1>
          <p>{activeGame.genre}</p>
          <p>{activeGame.platform}</p>
          <p>{activeGame.release}</p>
        </div>
      </div>
      <div className="p2">
        <Link to={`/${activeGame.id}/edit`} className="button">
          Editar
        </Link>
      </div>
    </div>
  );
};

export default ListSingle;
