import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load().then((saving) => JSON.parse(saving), (error) => {
  throw error;
});
