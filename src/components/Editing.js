import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Editing.css';

import { GameDataContext } from '../UserContext.js';

const Editing = () => {
  //controlling action edit action
  const [editStatus, setEditStatus] = useState(false);
  const { games, setGames } = useContext(GameDataContext);
  const { id } = useParams();
  let editingIndex;

  const findMatch = () => {
    const results = games.filter((game, index) => {
      if (game.id == id) {
        editingIndex = index;
        return game;
      }
    });
    return results;
  };
  const [activeGame] = findMatch();
  const [tempEdit, setTempEdit] = useState({ ...activeGame });

  const editItem = e => {
    setTempEdit({
      ...tempEdit,
      [e.target.name]: e.target.value
    });
  };

  const saveItem = operation => {
    //removing the item that is being edited:
    const newGames = games.filter((game, index) => {
      if (game.id != tempEdit.id) {
        return game;
      }
    });
    if (operation == 'save') {
      newGames.push(tempEdit);
      setGames(newGames);
      setEditStatus(true);
    } else if (operation == 'delete') {
      setGames(newGames);
    }
  };

  const SucessEdit = () => {
    if (editStatus) {
      return <p className="nearWhite">Editado com sucesso.</p>;
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="box flex column p2">
        <div className="flex column wrap center p2 nearWhite formPage">
          <h1 className="font-large bold">Editar jogo:</h1>
          <p>Id atual: {activeGame.id}</p>
          <div className="registerPage">
            <input
              className="inputBasic mv1"
              placeholder="Nome do Jogo"
              type="text"
              name="title"
              value={tempEdit.title}
              onChange={e => {
                editItem(e);
              }}
            />
          </div>
          <div className="registerPage">
            <input
              className="inputBasic mv1"
              placeholder="Gênero"
              type="text"
              name="genre"
              value={tempEdit.genre}
              onChange={e => {
                editItem(e);
              }}
            />
          </div>
          <div className="registerPage">
            <input
              className="inputBasic mv1"
              placeholder="Plataforma"
              type="text"
              name="platform"
              value={tempEdit.platform}
              onChange={e => {
                editItem(e);
              }}
            />
          </div>
          <div className="registerPage">
            <input
              className="inputBasic mv1"
              placeholder="Data Prevista"
              type="text"
              name="release"
              value={tempEdit.release}
              onChange={e => {
                editItem(e);
              }}
            />
          </div>
          <div className="flex row wrap">
            <SucessEdit />
          </div>
          <div className="flex row mv1">
            <Link to="/" className="button mh2">
              Cancelar
            </Link>
            <Link
              to=""
              className="button mh2"
              onClick={() => {
                saveItem('save');
              }}
            >
              Atualizar
            </Link>
            <Link
              to="/"
              className="button mh2"
              onClick={() => {
                saveItem('delete');
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editing;
