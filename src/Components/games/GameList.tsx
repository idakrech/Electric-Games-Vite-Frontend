import { useContext, useEffect } from "react";
import {GameContext} from "../../Contexts/GameContext";
import IGameContext from "../../Interfaces/IGameContext";
import GameItem from "./GameItem";

const GameList = () => {
    
    const {games, setGamesFromService} = useContext(GameContext) as IGameContext; 


    useEffect( () => {
        setGamesFromService();
    }, []);

    const showAllGames = () => {
        return games?.map((game, i) => (
            <article className="col-lg-4 col-md-6 col-sm-6 my-2">
                <GameItem 
                    key = {`game-${i}`}
                    image = {game.image} 
                    title = {game.title}
                    id = {game.id}
                    platform = {game.platform}
                    releaseYear = {game.releaseYear}
                />
            </article>
        ));
    }

    return (
        <div className="container">
            <section className="row">
                <div className="text-center text-white text-uppercase mt-3">
                    <h1 style={{fontFamily: "Electrolize"}}>All Games</h1>
                </div>
                {showAllGames()}
            </section>
        </div>
    )
}

export default GameList;