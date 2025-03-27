import { useContext, useRef, useState } from "react";
import IGame from "../../Interfaces/IGame";
import { GameContext } from "../../Contexts/GameContext";
import GameItem from "./GameItem";
import IGameContext from "../../Interfaces/IGameContext";

const FindGameById = () => {

    const [game, setGame] = useState<IGame>();
    const [message, setMessage] = useState<string | null>(null);
    const {getGameById} = useContext(GameContext) as IGameContext;

    const idElement = useRef<HTMLInputElement>(null);

    const findGameById = async () => {
        if(idElement.current != null){
            const id = parseInt(idElement.current.value);
            const game = await getGameById(id);
            console.log(game);
            idElement.current.value = "";
            setGame(game);
            if(!game){
                setMessage("No game with such id found");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
        }
    }


    return (
            <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-light text-center">
                
                <h3>Search game by id</h3>
                <input ref={idElement} className="form-control form-control-lg border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white mb-2" placeholder="Id" type="number"/>
                <button onClick={findGameById} className="btn w-100 rounded-1 mb-3" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Find</button>
             
                {
                    game?
                    <GameItem 
                    image = {game?.image}
                    title = {game?.title}
                    id = {game?.id}
                    platform = {game?.platform}
                    releaseYear = {game?.releaseYear}

                    />
                : ""}

                { message != null? 
                    <h5 className="text-center text-lilac">
                        {message}
                    </h5>
                : ""}
            </div>
    )

}

export default FindGameById;