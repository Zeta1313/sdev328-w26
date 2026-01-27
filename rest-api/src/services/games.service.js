import dataset from './games.js';

const { games } = dataset;

export const getAll = () => games;

export const getById = id => {
    const game = games.find(el => el.id === Number(id));
    if (game) {
        return game;
    }
    return null;
}

export const getGenres = id => {
    const game = games.find(el => el.id === Number(id));
    if (game) {
        return game.genre;
    }
    return [];
}

export const addGame = game => {
    if (idExists(game.id)) {
        return false;
    }

    games.push(game);
    return true;
}

function idExists(id) {
    return games.find(el => el.id === Number(id)) === null;
}