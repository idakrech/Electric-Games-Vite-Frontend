import {useState, createContext, FC, ReactNode} from "react";
import ICharacterContext from "../Interfaces/ICharacterContext";
import ICharacter from "../Interfaces/ICharacter";
import ElectricGamesService from "../Services/ElectricGamesService";
import ImageUploadService from "../Services/ImageUploadService";

export const CharacterContext = createContext<ICharacterContext | null>(null);

interface Props {
    children: ReactNode
}

export const CharacterProvider : FC<Props> = ({children}) => {

    const [characters, setCharacters] = useState<ICharacter[]>([]);

    const setCharactersFromService = async () => {
        const charactersFromService = await ElectricGamesService.getAllCharacters();
        setCharacters(charactersFromService);
    }

    const getCharacterById = async (id: number) => {
        const character: ICharacter = await ElectricGamesService.getCharacterById(id);
        return character;
    }

    const getCharacterByName = async (name: string) => {
        const character: ICharacter = await ElectricGamesService.getCharacterByName(name);
        return character;
    }

    const addCharacter = (newCharacter : ICharacter) => {
        ElectricGamesService.postCharacter(newCharacter);
        setCharacters([newCharacter, ...characters]);
    }

    const uploadCharacterImage = (image: File) => {
        ImageUploadService.uploadImage(image);
    }

    const deleteCharacter = async (id: number) => {
        ElectricGamesService.deleteCharacter(id);
        setCharacters(characters.filter(character => character.id !== id));
    }

    const updateCharacter = async (id: number, editedCharacter : ICharacter) => {
        const originalCharacter = await ElectricGamesService.getCharacterById(id);
        ElectricGamesService.putCharacter(editedCharacter);
        console.log(editedCharacter);
        const updatedCharacters = characters.splice(characters.indexOf(originalCharacter), 1, editedCharacter);
        setCharacters(updatedCharacters);
    }

    return (
        <CharacterContext.Provider value = {{characters, setCharactersFromService, 
        addCharacter,
        getCharacterById,
        getCharacterByName, 
        uploadCharacterImage, 
        deleteCharacter, 
        updateCharacter}}>
            {children};
        </CharacterContext.Provider>
    )
}