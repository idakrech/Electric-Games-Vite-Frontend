import { useContext, useEffect } from "react";
import {CharacterContext} from "../../Contexts/CharacterContext";
import ICharacterContext from "../../Interfaces/ICharacterContext";
import CharacterItem from "./CharacterItem";

const CharacterList = () => {

    const {characters, setCharactersFromService} = useContext(CharacterContext) as ICharacterContext;

    useEffect( () => {
        setCharactersFromService();
    }, []);

    const showAllCharacters = () => {
        return characters.map((character, i) => (
            <article className="col-lg-4 col-md-6 col-sm-6 my-2">
                <CharacterItem 
                    key={`character-${i}`}
                    image = {character.image}
                    name = {character.name}
                    id = {character.id}
                    game = {character.game}
                />
            </article>
        ))
    }

    return (
        <div className="container">
        <section className="row">
            <div className="text-center text-white text-uppercase mt-3">
                <h1 style={{fontFamily: "Electrolize"}}>All Characters</h1>
            </div>
            {showAllCharacters()}
        </section>
    </div>
    )

}
export default CharacterList;