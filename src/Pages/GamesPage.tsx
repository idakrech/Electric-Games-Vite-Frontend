import GameList from "../Components/games/GameList";
import AddOrUpdateGame from "../Components/games/AddOrUpdateGame";
import FindGameById from "../Components/games/FindGameById";
import FindGameByTitle from "../Components/games/FindGameByTitle";
import DeleteGame from "../Components/games/DeleteGame";
import ElectricGamesHeader from "../Components/ElectricGamesHeader";
import ezio from "../Images/Ezio-Auditore.png"
import minecraft from "../Images/Minecraft.png"
import cyberpunk from "../Images/cyberpunk.png"

const GamesPage = () => {
    return (
        <main className="container d-flex justify-content-center">      
             
            <div className="container row d-flex justify-content-center">

                <div className="col-lg-8 col-md-12 col-sm-12">
                    <ElectricGamesHeader/>
                </div>

                <div className="col-lg-8 col-md-12 col-sm-12 bg-danger bg-opacity-75">
                    <GameList/>
                </div>
            
                <div className="col-lg-8 col-md-12 col-sm-12 bg-danger bg-opacity-75 mt-5">
                    
                    <div className="row mt-4 d-flex justify-content-center">
                        <FindGameById/>
                        <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center">
                            <img src={minecraft} style={{height: "10rem"}} alt=""/>
                        </div>
                        <FindGameByTitle/>
                    </div>

                    <div className="row mt-3 d-flex justify-content-center">
                        <AddOrUpdateGame/>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src={ezio} alt=""/>
                        </div>
                    </div>

                    <div className="row mt-4 d-flex justify-content-center">
                        <DeleteGame/>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src={cyberpunk} style={{height: "15rem"}} alt=""/>
                        </div>
                    </div>

                </div> 

            </div>
        </main>
    )
}
export default GamesPage;