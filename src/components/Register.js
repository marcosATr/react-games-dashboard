import React, { useState, useContext } from 'react';
import { GameDataContext } from '../UserContext.js';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { games, setGames } = useContext(GameDataContext);
  const [status, setStatus] = useState(null);
  //status of the from

  //Finding the next available id:
  const allRegisteredIds = games.map(game => {
    return game.id;
  });

  const findAvailable = () => {
    let nextId;
    const length = allRegisteredIds.length;
    for (let i = 1; i <= length + 1; i++) {
      if (allRegisteredIds.includes(i)) {
      } else {
        nextId = i;
      }
    }
    return nextId;
  };

  //monitoring and getting fields data
  const [newItem, setNewItem] = useState({});
  const updateNewItem = e => {
    setNewItem({
      id: findAvailable(),
      ...newItem,
      [e.target.name]: e.target.value
    });
  };

  console.log(newItem);

  //submit data do main data.
  const submitGame = () => {
    const newItemLenght = Object.values(newItem).length;
    if (newItemLenght < 5) {
      setStatus(false);
    } else {
      const updatedGames = [...games, newItem];
      setGames(updatedGames);
      setStatus(true);
    }
    console.log(newItemLenght, status);
  };

  //submit warning
  const SubmitWarning = () => {
    if (status) {
      return <p className="nearWhite">Sucesso, novo game cadastrado.</p>;
    } else if (status == false) {
      return (
        <>
          <p className="nearWhite">
            Por favor, preencha os campos corretamente.
          </p>
          <Link className="button" onClick={() => submitGame()}>
            Cadastrar
          </Link>
        </>
      );
    } else {
      return (
        <Link className="button" onClick={() => submitGame()}>
          Cadastrar
        </Link>
      );
    }
  };
  return (
    <div className="registerFormHolder flex column center">
      <h1 className="font-large nearWhite bold">Cadastrar Novo Jogo:</h1>
      <div className="registerPage">
        <input
          className="inputBasic"
          placeholder="Nome do Jogo"
          type="text"
          name="title"
          required
          onChange={e => {
            updateNewItem(e);
          }}
        />
      </div>
      <div className="registerPage">
        <input
          className="inputBasic"
          placeholder="Gênero"
          type="text"
          name="genre"
          required
          onChange={e => {
            updateNewItem(e);
          }}
        />
      </div>
      <div className="registerPage">
        <input
          className="inputBasic"
          placeholder="Plataforma"
          type="text"
          name="platform"
          required
          onChange={e => {
            updateNewItem(e);
          }}
        />
      </div>
      <div className="registerPage">
        <input
          className="inputBasic"
          placeholder="Data Prevista"
          type="text"
          name="release"
          required
          onChange={e => {
            updateNewItem(e);
          }}
        />
      </div>
      <div>
        <SubmitWarning />
      </div>
    </div>
  );
};

export default Register;
