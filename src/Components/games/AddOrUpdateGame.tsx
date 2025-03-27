import {useContext, useState, useRef, ChangeEvent} from "react";
import {GameContext} from "../../Contexts/GameContext";
import IGame from "../../Interfaces/IGame";
import IGameContext from "../../Interfaces/IGameContext";

const AddOrUpdateGame = () => {
    
    const {addGame, updateGame, uploadGameImage} = useContext(GameContext) as IGameContext;

    const [newGame, setNewGame] = useState<IGame>({id: 0, title: "", platform: "", releaseYear: 0, image: ""});
    const [image, setImage] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const setGameHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let {name, value}:any = e.currentTarget;

        if (name === "id" || name === "releaseYear"){
            value = parseInt(value);
        }

        if (name === "image"){

            const {files} = e.target;

            let imageFileName = "";

            if(files != null){

                const file = files[0];
                imageFileName = files[0].name;
                setImage(file);
            }

            value = imageFileName;

        }

        setNewGame({...newGame, [name]: value});
    }
    

    const registerGame = () => {
        if (newGame.id > 0
            && newGame.title.length > 0
            && newGame.platform.length > 0
            && newGame.releaseYear > 0
            && image != null){
                addGame(newGame);
                console.log(newGame);
                setMessage("Game added successfully");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            } else {
                setMessage("You have to fill all the fields");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
    }

    const idElement = useRef<HTMLInputElement>(null);

    const updateChosenGame = () => {
        if (newGame.title.length > 0
            && newGame.platform.length > 0
            && newGame.releaseYear > 0
            && idElement.current != null
            && image != null){
                const id = parseInt(idElement.current.value);
                updateGame(id, newGame);
                setMessage("Game updated successfully");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            } else {
                setMessage("You have to fill all the fields");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            }
    }

    const registerGameImage = () => {
        if (image != null){
            uploadGameImage(image);
        }
    }

    const registerGameAndImage = () => {
        registerGame();
        registerGameImage();
    }

    const updateGameAndImage = () => {
        updateChosenGame();
        registerGameImage();
    }

    return (
        <div className="col text-light"> 
        
            <h3>Add or update a game</h3>
            
                <div className="input-group mb-2">
                    <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-id">Id</span>
                    <input onChange={setGameHandler} ref={idElement} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Id" aria-label="Id" aria-describedby="basic-addon-id" name="id" type="number"/>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-title">Title</span>
                    <input onChange={setGameHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Title" aria-label="Title" aria-describedby="basic-addon-title" name="title" type="text"/>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-platform">Platform</span>
                    <input onChange={setGameHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Platform" aria-label="Platform" aria-describedby="basic-addon-platform" name="platform" type="text"/>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-release-year">Release year</span>
                    <input onChange={setGameHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Release year" aria-label="Release year" aria-describedby="basic-addon-release-year" name="releaseYear" type="number"/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-image">Image</span>
                    <input onChange={setGameHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" aria-label="Image" aria-describedby="basic-addon-image" name="image" type="file"/>
                </div>
              
                <div className="d-flex justify-content-center mb-2">
                    <button onClick={updateGameAndImage} type="button" className="btn btn-lg btn-transparent btn-outline-success rounded-1 w-75 me-3" style={{outlineColor: "rgb(32,89,59)"}}>Update</button>
                    <button onClick={registerGameAndImage} className="btn w-75 btn-lg rounded-1" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Add</button>
                </div>
            
            { message != null? 
                <h5 className="text-center text-lilac">
                    {message}
                </h5>: 
            ""}
        </div>
    )
}
export default AddOrUpdateGame;