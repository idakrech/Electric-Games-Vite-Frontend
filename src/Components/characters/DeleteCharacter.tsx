import { useContext, useRef, useState } from "react";
import { CharacterContext } from "../../Contexts/CharacterContext";
import ICharacterContext from "../../Interfaces/ICharacterContext";

const DeleteCharacter = () => {

    const {deleteCharacter} = useContext(CharacterContext) as ICharacterContext;

    const [message, setMessage] = useState<string>();

    const idElement = useRef<HTMLInputElement>(null);

    const deleteChosenCharacter = () => {
        if(idElement.current != null){
            const id = parseInt(idElement.current.value);
            deleteCharacter(id);
            idElement.current.value = "";
            setMessage("Character deleted successfully");
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }else{
            setMessage("You have to type in the character's id");
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 text-light text-center">
            <h3>Delete character</h3>
            <input ref={idElement} className="form-control form-control-lg border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white mb-2" placeholder="Id" type="number"/>
            <button onClick={deleteChosenCharacter} className="btn w-100 rounded-1" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Delete</button>
            { message != null? 
                <h5 className="text-center text-lilac">
                    {message}
                </h5>: 
            ""}
        </div>
    )
}

export default DeleteCharacter;