import CharacterList from "../Components/characters/CharacterList";
import AddOrUpdateCharacter from "../Components/characters/AddOrUpdateCharacter";
import FindCharacterById from "../Components/characters/FindCharacterById";
import FindCharacterByName from "../Components/characters/FindCharacterByName";
import DeleteCharacter from "../Components/characters/DeleteCharacter";
import ElectricGamesHeader from "../Components/ElectricGamesHeader";
import ezio from "../assets/Ezio-Auditore.png"
import minecraft from "../assets/Minecraft.png"
import cyberpunk from "../assets/cyberpunk.png"

const CharactersPage = () => {
    return (
        <main className="container d-flex justify-content-center">      
             
            <div className="container row d-flex justify-content-center">

                <div className="col-lg-8 col-md-12 col-sm-12">
                    <ElectricGamesHeader/>
                </div>

                <div className="col-lg-8 col-md-12 col-sm-12 bg-danger bg-opacity-75">
                    <CharacterList/>
                </div>
            
                <div className="col-lg-8 col-md-12 col-sm-12 bg-danger bg-opacity-75 mt-5">
                    
                    <div className="row mt-4">
                        <FindCharacterById/>
                        <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center">
                            <img src={minecraft} style={{height: "10rem"}} alt=""/>
                        </div>
                        <FindCharacterByName/>
                    </div>

                    <div className="row mt-3">
                        <AddOrUpdateCharacter/>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src={ezio} alt=""/>
                        </div>
                    </div>

                    <div className="row mt-3 d-flex justify-content-center">
                        <DeleteCharacter/>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src={cyberpunk} style={{height: "15rem"}} alt=""/>
                        </div>
                    </div>

                </div> 

            </div>
        </main>
    )
}
export default CharactersPage;