import { useContext, useRef, useState, useEffect } from "react";
import { CharacterContext } from "../Contexts/CharacterContext";
import ICharacterContext from "../Interfaces/ICharacterContext";
import ICharacter from "../Interfaces/ICharacter";

const Quiz = () => {

    const [character, setCharacter] = useState<ICharacter>();
    const {characters, setCharactersFromService } = useContext(CharacterContext) as ICharacterContext; 
    const [message, setMessage] = useState<string | null>(null);
    const [numberClicked, setNumberClicked] = useState<number>(0);
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState<number>(0);

    const titleElement = useRef<HTMLInputElement>(null);

    useEffect( () => {
        setCharactersFromService();
    }, []);
 
    const findRandomCharacter = async () => {
        setNumberClicked((prev) => prev + 1);
        setNumberClicked(numberClicked);
        console.log("numbers clicked: " + numberClicked);
        const character = characters[numberClicked-1];
        setCharacter(character);
        console.log(character);
        if (titleElement.current) {
            titleElement.current.value = "";
          }
    }

    const initialize = () => {
        findRandomCharacter();
        setCorrectAnswerCounter(0);
        setNumberClicked(1);
    }

    const handleAnswer = () => {
        
        if ( titleElement.current?.value === character?.game) {
            setCorrectAnswerCounter(prev => prev + 1);
            setMessage("Correct!");
            setTimeout(() => {
                setMessage(null);
            }, 2000);
            findRandomCharacter();
            if (correctAnswerCounter == characters.length) {
                setMessage("Congratulations, quiz completed!");
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
                setNumberClicked(0);
            }
        } else {
            setMessage("Wrong, try again!");
        }
    }


    return (
        <div className="container col-lg-10 col-md-12 col-sm-12 bg-danger bg-opacity-75 p-5 mt-3">
            <div className="text-center text-white text-uppercase mt-3">
                <h1 style={{fontFamily: "Electrolize"}}>QUIZ</h1>
                <button onClick={initialize} className="col btn w-50 btn-lg rounded-1 m-2 mb-4" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Start</button>
                {
                character?
                    <div className="card border-0 bg-transparent"> 
                        <img className="card-img-top" src={`https://localhost:7265/images/${character.image}`} style={{width: "100%", height: "30rem", display: "block", objectFit: "cover"}} alt="Image of a random game character"/>
                        <div className="card-body"> 
                            <h6 className="card-title text-white text-center fw-bold mb-3">This character appears in:</h6>
                            <input ref={titleElement} className="form-control border-lilac border-top-0 border-start-0 border-end-0 rounded-0 bg-snake bg-opacity-25 text-white" type="text" placeholder="Game's title"></input>
                            <button onClick={handleAnswer} className="col btn w-50 btn-lg rounded-1 m-2 mb-4" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button">Next</button>
                        </div>
                    </div>
                : ""}
                { message != null? 
                <div>
                    <h5 className="text-lilac">{message}</h5>
                </div>
                : ""}
            </div>
        </div>
    );
}

export default Quiz;