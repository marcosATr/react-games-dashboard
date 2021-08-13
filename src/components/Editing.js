import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Editing.css";

const Editing = () => {
  const baseUrl = "https://express-games-backend-rest-api.herokuapp.com/";

  //controlling the current game state
  const [game, setGame] = useState([]);
  const [updatedItem, setUpdatedItem] = useState([]);
  //edit status:
  const [editStatus, setEditStatus] = useState(false);

  //Getting url params
  const { id } = useParams();
  console.log(id, typeof id);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseUrl}${id}`).then((response) =>
        response.json()
      );
      setGame(result);
      //set temporary items as identical do fetched data before edit starts
      setUpdatedItem(result);
      console.log("fetch executed");
    };
    fetchData();
  }, []);

  //editing:
  const editItem = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async () => {
    console.log(updatedItem);
    await fetch(`${baseUrl}${id}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }).then(setEditStatus(true));
  };

  const deleteData = async () => {
    await fetch(`${baseUrl}${id}/edit`, {
      method: "DELETE",
    });
  };

  const saveItem = (operation) => {
    if (operation == "save") {
      submitData();
    } else if (operation == "delete") {
      deleteData();
    }
  };

  //controlling edit status:
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
              value={updatedItem.title || ""}
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
              value={updatedItem.genre || ""}
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
              value={updatedItem.platform || ""}
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
              value={updatedItem.release || ""}
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
              to={`/${id}/edit`}
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
