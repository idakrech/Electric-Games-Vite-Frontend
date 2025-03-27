import {useState, createContext, FC, ReactNode} from "react";
import IGameContext from "../Interfaces/IGameContext";
import IGame from "../Interfaces/IGame";
import ElectricGamesService from "../Services/ElectricGamesService";
import ImageUploadService from "../Services/ImageUploadService";

export const GameContext = createContext<IGameContext | null>(null);

interface Props {
    children: ReactNode
}

export const GameProvider : FC<Props> = ({children}) => {

    const [games, setGames] = useState<IGame[]>([]);

    const setGamesFromService = async () => {
        const gamesFromService = await ElectricGamesService.getAllGames();
        setGames(gamesFromService);
    }

    const getGameById = async (id : number) => {
        const game: IGame = await ElectricGamesService.getGameById(id);
        return game;
    }

    const getGameByTitle = async (title : string) => {
        const game: IGame = await ElectricGamesService.getGameByTitle(title);
        return game;
    }

    const addGame = async (newGame : IGame) => {
        ElectricGamesService.postGame(newGame);
        setGames([...games, newGame]);
    }

    const uploadGameImage = (image: File) => {
        ImageUploadService.uploadImage(image);
    }

    const deleteGame = async (id: number) => {
        ElectricGamesService.deleteGame(id);
        setGames(games.filter(game => game.id !== id));
    }

    const updateGame = async (id: number, editedGame : IGame) => {
        const originalGame = await ElectricGamesService.getGameById(id);
        ElectricGamesService.putGame(editedGame);
        console.log(editedGame);
        const updatedGames = games.splice(games.indexOf(originalGame), 1, editedGame);
        setGames(updatedGames);
    }

    return (
        <GameContext.Provider value = {{
            games,
            setGamesFromService, 
            getGameById,
            getGameByTitle,
            addGame, 
            uploadGameImage, 
            deleteGame, 
            updateGame}}> 
            {children};
        </GameContext.Provider>
    )
}