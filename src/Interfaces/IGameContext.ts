import IGame from "./IGame";

interface IGameContext {
    games: IGame[];
    setGamesFromService: () => void;
    getGameById: (id : number) => Promise<IGame>;
    getGameByTitle: (title: string) => Promise<IGame>;
    addGame: (newGame : IGame) => void;
    uploadGameImage: (image: File) => void;
    deleteGame: (id : number) => void; 
    updateGame: (id : number, editedGame : IGame) => void;
}

export default IGameContext;