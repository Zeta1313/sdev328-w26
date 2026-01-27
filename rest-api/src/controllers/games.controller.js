import * as service from './../services/games.service.js';

export const allGames = (req, res) => {
    const games = service.getAll();

    if (games) return res.status(200).json(games);
    else return res.status(404).json({ message: "No games found!" });
}

export const gameById = (req, res) => {
    const { id } = req.query;
    const game = service.getById(id);
    
    if (game) return res.status(200).json(game);
    else return res.status(404).json({ message: "No game found!" });
}

export const getGenres = (req, res) => {
    const { id } = req.query;
    const genres = service.getGenres(id);

    if (genres.length > 0) return res.status(200).json({ genres });
    else return res.status(404).json({ message: "No genres found!" });
}

export const addGame = (req, res) => {
    const game = req.body;
    const success = service.addGame(game);

    if (success) return res.status(201).json({ message: "Record added!" });
    else return res.status(409).json({ message: `ID ${game.id} already exists`});
}