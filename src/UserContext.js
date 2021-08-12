import { createContext } from "react";

const BASEURL = "https://express-games-backend-rest-api.herokuapp.com/";

const loadGames = async () => {
  const response = await fetch(BASEURL);
  const gameData = await response.json();
  return gameData
};
const data = loadGames();

const GameDataContext = createContext(null);
export { GameDataContext, data };

// const {games, setGames} = useContext(GameDataContext)
