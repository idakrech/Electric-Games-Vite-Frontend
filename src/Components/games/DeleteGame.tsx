import { useContext, useRef, useState } from "react";
import { GameContext } from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";

const DeleteGame = () => {

    const {deleteGame} = useContext(GameContext) as IGameContext;

    const [message, setMessage] = useState<string>();

    const idElement = useRef<HTMLInputElement>(null);

    const deleteChosenGame = () => {
        if(idElement.current != null){
            const id = parseInt(idElement.current.value);
            deleteGame(id);
            idElement.current.value = "";
            setMessage("Game deleted successfully");
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }else{
            setMessage("You have to type in the game's correct id");
        }
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 text-light text-center">
            
            <h3>Delete game</h3>
            <input ref={idElement} className="form-control form-control-lg border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white mb-2" placeholder="Id" type="number"/>
            <button onClick={deleteChosenGame} className="btn w-100 rounded-1 mb-2" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}}  type="button">Delete</button>

            { message != null? 
                <h5 className="text-center text-lilac">
                    {message}
                </h5>: 
            ""}
        </div>
    )
}

export default DeleteGame;