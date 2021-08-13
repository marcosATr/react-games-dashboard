import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Table.css";

function Table() {
  const BASEURL = "https://express-games-backend-rest-api.herokuapp.com/";

  const [games, setGames] = useState([]);

  const loadGames = async () => {
    const res = await fetch(BASEURL);
    const gameData = await res.json();
    setGames(gameData);
    console.log(gameData.length);
  };

  useEffect(() => {
    loadGames();
  }, []);

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
          <tbody className="font-small">
            {games.map((game) => (
              <tr key={game._id}>
                <td>
                  <Link to={`/${game._id}`} className="linkWithImage">
                    {game.image && (
                      <div className="gameImageSmall">
                        <img src={game.image} />
                      </div>
                    )}
                    {game.title}
                  </Link>
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
