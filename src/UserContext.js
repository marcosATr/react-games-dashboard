import { createContext } from 'react';

const data = [
  {
    id: 1,
    title: 'Upcoming game 1',
    genre: 'rpg',
    platform: 'xbox',
    release: 'March 2021'
  },
  {
    id: 2,
    title: 'Upcoming game 2',
    genre: 'mmo',
    platform: 'ps5',
    release: 'April 2023'
  },
  {
    id: 3,
    title: 'Upcoming game 3',
    genre: 'shooter',
    platform: 'xbox',
    release: 'December 2021'
  }
];

const GameDataContext = createContext(null);
export { GameDataContext, data };

// const {games, setGames} = useContext(GameDataContext)
