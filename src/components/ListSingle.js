import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListSingle.css";

import { Link } from "react-router-dom";

const ListSingle = () => {
  const baseUrl = "https://express-games-backend-rest-api.herokuapp.com/";
  const { id } = useParams();

  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseUrl}${id}`).then((response) =>
        response.json()
      );
      setGame(result);
    };
    fetchData();
  }, []);

  return (
    <div className="box p2 flex column">
      <div className="flex row wrap">
        <div className="p2">
          <img src={"https://via.placeholder.com/150x250"} />
        </div>
        <div className="nearWhite p2">
          <h1>{game.title}</h1>
          <p>{game.genre}</p>
          <p>{game.platform}</p>
          <p>{game.release}</p>
        </div>
      </div>
      <div className="p2">
        <Link to={`/${game._id}/edit`} className="button">
          Editar
        </Link>
      </div>
    </div>
  );
};

export default ListSingle;
