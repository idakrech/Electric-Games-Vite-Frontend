import { useRef, useState } from "react";
import ICharacter from "../../Interfaces/ICharacter";
import ElectricGamesService from "../../Services/ElectricGamesService"
import CharacterItem from "./CharacterItem";

const FindCharacterById = () => {

    const [character, setCharacter] = useState<ICharacter | undefined>(undefined);
    const [message, setMessage] = useState<string | null>(null);
    const idElement = useRef<HTMLInputElement>(null);

    const findCharacterById = async () => {
        if(idElement.current != null){
            const id = parseInt(idElement.current.value);
            const character : ICharacter = await ElectricGamesService.getCharacterById(id);
            console.log(character);
            idElement.current.value = "";
            setCharacter(character);
            if(!character){
                setMessage("No character with such id found");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
        }
    }


    return (
        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-light">

            <h3>Search character by id</h3>
            <input ref={idElement} className="form-control form-control-lg border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white mb-2" placeholder="Id" type="number"/>
            <button onClick={findCharacterById} className="btn w-100 rounded-1 mb-3" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Find</button>
            
            {
                character?
                <CharacterItem
                image = {character?.image} 
                name = {character?.name}
                id = {character?.id}
                game = {character?.game}
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

export default FindCharacterById;