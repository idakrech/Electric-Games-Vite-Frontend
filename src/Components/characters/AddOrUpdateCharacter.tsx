import {useContext, useState, useRef, ChangeEvent} from "react";
import {CharacterContext} from "../../Contexts/CharacterContext";
import ICharacterContext from "../../Interfaces/ICharacterContext";
import ICharacter from "../../Interfaces/ICharacter";

const AddOrUpdateCharacter = () => {

    const {addCharacter, updateCharacter, uploadCharacterImage} = useContext(CharacterContext) as ICharacterContext;

    const [newCharacter, setNewCharacter] = useState<ICharacter>({name: "", id: 0, game: "", image: ""});
    const [image, setImage] = useState<File | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const setCharacterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        
        const {name, value: rawValue} = e.currentTarget;

        let value: string | number = rawValue;

        if(name === "id"){
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

        setNewCharacter({...newCharacter, [name]: value});
    }

    const registerCharacter = () => {
        if (newCharacter.name.length > 0 
            && newCharacter.id>0
            && newCharacter.game.length > 0
            && image != null){
                addCharacter(newCharacter);
                console.log(newCharacter);
                setMessage("Character added successfully");
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

    const updateChosenCharacter = () => {
        if (newCharacter.name.length > 0
            && newCharacter.game.length > 0
            && idElement.current != null
            && image != null){
                const id = parseInt(idElement.current.value);
                updateCharacter(id, newCharacter);
                setMessage("Character updated successfully");
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

    const registerCharacterImage = () => {
        if (image != null){
            uploadCharacterImage(image);
        }
    }

    const registerCharacterAndImage = () => {
        registerCharacter();
        registerCharacterImage();
    }

    const updateCharacterAndImage = () => {
        updateChosenCharacter();
        registerCharacterImage();
    }

    return (
        <div className="col text-light"> 

            <h3>Add or update a character</h3>
            
            <div className="input-group mb-2">
                <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-id">Id</span>
                <input onChange={setCharacterHandler} ref={idElement} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Id" aria-label="Id" aria-describedby="basic-addon-id" name="id" type="number"/>
            </div>

            <div className="input-group mb-2">
                <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-name">Name</span>
                <input onChange={setCharacterHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Name" aria-label="Name" aria-describedby="basic-addon-name" name="name" type="text"/>
            </div>

            <div className="input-group mb-2">
                <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-game">From</span>
                <input onChange={setCharacterHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" placeholder="Game" aria-label="Game" aria-describedby="basic-addon-game" name="game" type="text"/>
            </div>


             <div className="input-group mb-3">
                <span className="input-group-text bg-snake bg-opacity-50 border-lilac border-start-0 border-top-0 text-lilac fw-bold rounded-0 d-flex justify-content-end" style={{width: "8rem"}} id="basic-addon-image">Image</span>
                <input onChange={setCharacterHandler} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" aria-label="Image" aria-describedby="basic-addon-image" name="image" type="file"/>
            </div>
              
            <div className="d-flex justify-content-center">
                <button onClick={registerCharacterAndImage} className="btn w-75 btn-lg rounded-1 me-3" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Add</button>
                <button onClick={updateCharacterAndImage} type="button" className="btn btn-lg btn-transparent btn-outline-success rounded-1 w-75" style={{outlineColor: "rgb(32,89,59)"}}>Update</button>
            </div>

            { message != null? 
                <h5 className="text-center text-lilac">
                    {message}
                </h5>: 
            ""}

        </div>
    )
}

export default AddOrUpdateCharacter;
