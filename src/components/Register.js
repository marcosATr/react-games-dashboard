import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [status, setStatus] = useState(null);
  //status of the from
  const BASEURL = "https://express-games-backend-rest-api.herokuapp.com/";

  

  //monitoring and getting fields data
  const [newItem, setNewItem] = useState({});
  const updateNewItem = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const submitGame = async () => {
    const newItemLenght = Object.values(newItem).length;
    console.log(newItemLenght);
    if (newItemLenght < 4) {
      setStatus(false);
    } else {
      setStatus(true);
      await fetch(`${BASEURL}cadastrar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
    }
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
          <Link to="/cadastrar" className="button" onClick={() => submitGame()}>
            Cadastrar
          </Link>
        </>
      );
    } else {
      return (
        <Link to="/cadastrar" className="button" onClick={() => submitGame()}>
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
          onChange={(e) => {
            updateNewItem(e);
          }}
        />
      </div>
      <div className="registerPage">
        <input
          className="inputBasic"
          placeholder="Imagem"
          type="text"
          name="image"
          required
          onChange={(e) => {
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
          onChange={(e) => {
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
          onChange={(e) => {
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
          onChange={(e) => {
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
