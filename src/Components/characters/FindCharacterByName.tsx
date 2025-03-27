import { useContext, useRef, useState } from "react";
import ICharacter from "../../Interfaces/ICharacter";
import { CharacterContext } from "../../Contexts/CharacterContext";
import ICharacterContext from "../../Interfaces/ICharacterContext";
import CharacterItem from "./CharacterItem";

const FindCharacterByName = () => {

    const [character, setCharacter] = useState<ICharacter>();
    const [message, setMessage] = useState<string | null>(null);
    const {getCharacterByName} = useContext(CharacterContext) as ICharacterContext;

    const nameElement = useRef<HTMLInputElement>(null);

    const findCharacterByName = async () => {
        if(nameElement.current != null){
            const name = nameElement.current.value;
            const character = await getCharacterByName(name);
            console.log(character);
            nameElement.current.value = "";
            setCharacter(character);
            if(!character){
                setMessage("No character with such name found");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
        }
    }


    return (
        <div className="col-lg-4 col-md-6 col-sm-6 mt-3 text-light"> 

            <h3>Search character by name</h3> 
            <input ref={nameElement} className="form-control form-control-lg border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white mb-2" placeholder="Name" type="text"/>
            <button onClick={findCharacterByName} className="btn w-100 rounded-1 mb-3" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Find</button>
            
            {
                character?
                <CharacterItem 
                image = {character?.image}
                name = {character?.name}
                id = {character?.id}
                game = {character?.game}
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

export default FindCharacterByName;