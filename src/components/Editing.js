import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Editing.css";

const Editing = () => {
  const BASEURL = "https://express-games-backend-rest-api.herokuapp.com/";

  const [games, setGames] = useState([]);

  //controlling action edit action
  const [editStatus, setEditStatus] = useState(false);

  const { id } = useParams();
  const loadGames = async () => {
    const res = await fetch(`${BASEURL}${id}`);
    const gameData = await res.json();
    setGames([{ ...gameData }]);
  };
  
  useEffect(() => {
    loadGames();
  }, []);
  
const game = games[0]

  const editItem = (e) => {
    setGames([{
      ...game,
      [e.target.name]: e.target.value,
    }]);
  };

  const saveItem = async (operation) => {
    //removing the item that is being edited:

    if (operation == "save") {
      // newGames.push(tempEdit);
      // setGames(newGames);
      setEditStatus(true);
      await fetch(`${BASE_URL}${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...tempEdit,
        }),
      });
    } else if (operation == "delete") {
      await fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
      });
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
      <div className="box flex center column p2">
        <div className="flex column center p2 nearWhite formPage">
          <h1 className="font-large bold">Editar jogo:</h1>
          <p>Id atual: {id}</p>
          <div className="registerPage">
            <input
              className="inputBasic mv1"
              placeholder="Nome do Jogo"
              type="text"
              name="title"
              value={games[0].title}
              onChange={(e) => {
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
              value={game.genre}
              onChange={(e) => {
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
              value={game.platform}
              onChange={(e) => {
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
              value={game.release}
              onChange={(e) => {
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
                saveItem("save");
              }}
            >
              Atualizar
            </Link>
            <Link
              to="/"
              className="button mh2"
              onClick={() => {
                saveItem("delete");
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
