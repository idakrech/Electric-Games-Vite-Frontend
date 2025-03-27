import ICharacter from "./ICharacter";

interface ICharacterContext {
    characters: ICharacter[];
    setCharactersFromService: () => void;
    getCharacterById: (id: number) => Promise<ICharacter>;
    getCharacterByName: (name: string) => Promise<ICharacter>;
    addCharacter: (newCharacter: ICharacter) => void;
    uploadCharacterImage: (image: File) => void;
    deleteCharacter: (id: number) => void;
    updateCharacter: (id: number, editedCharacter: ICharacter) => void;
}

export default ICharacterContext;