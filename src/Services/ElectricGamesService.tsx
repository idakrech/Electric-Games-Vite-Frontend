import axios from "axios";
import ICharacter from "../Interfaces/ICharacter";
import IGame from "../Interfaces/IGame";

const ElectricGamesService = (
    () => {

        const endpoints = {
            games: "https://localhost:7265/game",
            characters: "https://localhost:7265/character"
        }

        const getAllGames = async () => {
            try{
            const response = await axios.get(endpoints.games);
            return response.data;
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const getGameById = async (id : number) => {
            try {
                const response = await axios.get(`${endpoints.games}/${id}`);
                const chosenGame = response.data;
                if(chosenGame != null){
                    return chosenGame;
                }else{
                    return null;
                }
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const getGameByTitle = async (title : string) => {
            try {
                const response = await axios.get(`${endpoints.games}/GetGameByTitle/${title}`);
                const chosenGame = response.data;
                if(chosenGame != null){
                    return chosenGame;
                }else{
                    return null;
                }
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }    
        }

        const getAllCharacters = async () => {
            try {
                const response = await axios.get(endpoints.characters);
                return response.data;
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const getCharacterById = async (id : number) => {
            try {
                const response = await axios.get(`${endpoints.characters}/${id}`);
                const chosenCharacter = response.data;
                if(chosenCharacter != null){
                    return chosenCharacter;
                }else{
                    return null;
                }
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }    
        }

        const getCharacterByName = async (name : string) => {
            try {
                const response = await axios.get(`${endpoints.characters}/GetCharacterByName/${name}`);
                const chosenCharacter = response.data;
                if(chosenCharacter != null){
                    return chosenCharacter;
                }else{
                    return null;
                }
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const postGame = async (newGame: IGame) => {
            try {
                const result = await axios.post(endpoints.games, newGame);
                console.log(result);
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const postCharacter = async (newCharacter: ICharacter) => {
            try {
                const result = await axios.post(endpoints.characters, newCharacter);
                console.log(result);
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const deleteGame = async (id: number) => {
            try {
                const result = await axios.delete(`${endpoints.games}/${id}`);
                console.log(result);
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const deleteCharacter = async (id: number) => {
            try {
                const result = await axios.delete(`${endpoints.characters}/${id}`);
                console.log(result);
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const putGame = async (editedGame: IGame) => {
            try {
                const result = await axios.put(endpoints.games, editedGame);
                console.log(result);
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        const putCharacter = async (editedCharacter: ICharacter) => {
            try {
                const result = await axios.put(endpoints.characters, editedCharacter);
                console.log(result);
            }catch(error){
                if(axios.isAxiosError(error) && error.response){
                    console.log(error.response)
                }
                return null;
            }
        }

        return {
            getAllGames,
            getGameById,
            getGameByTitle,
            getAllCharacters,
            getCharacterById,
            getCharacterByName,
            postGame,
            postCharacter,
            deleteGame,
            deleteCharacter,
            putGame,
            putCharacter
        }
    }
)();
export default ElectricGamesService;