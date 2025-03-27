import { useContext, useRef, useState } from "react";
import IGame from "../../Interfaces/IGame";
import { GameContext } from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";
import GameItem from "./GameItem";

const FindGameByTitle = () => {

    const [game, setGame] = useState<IGame>();
    const [message, setMessage] = useState<string | null>(null);
    const {getGameByTitle} = useContext(GameContext) as IGameContext;

    const titleElement = useRef<HTMLInputElement>(null);

    const findGameByTitle = async () => {
        if(titleElement.current != null){
            const title = titleElement.current.value;
            const game = await getGameByTitle(title);
            console.log(game);
            titleElement.current.value = "";
            setGame(game);
            if(!game){
                setMessage("No game with such title found");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
        }
    }


    return (
        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-light text-center">
            
            <h3>Search game by title</h3>
            <input ref={titleElement} className="form-control form-control-lg border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white mb-2" placeholder="Title" type="text"/>
            <button onClick={findGameByTitle} className="btn w-100 rounded-1 mb-3" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Find</button>
    
            {
                game?
                <GameItem 
                image = {game?.image}
                title = {game?.title}
                id = {game?.id}
                platform = {game?.platform}
                releaseYear = {game?.releaseYear}
                />
                : ""
            }
            { message != null? 
                    <h5 className="text-center text-lilac">
                        {message}
                    </h5>
                : ""}
        </div>
    )

}

export default FindGameByTitle;