import { Link } from "react-router-dom";
import ElectricGamesHeader from "../Components/ElectricGamesHeader";

const HomePage = () => {
    return (
        <main className="container d-flex justify-content-center" style={{width: "100%"}}>
            
            <div className="container row d-flex justify-content-center">

                <div className="col-lg-8 col-md-12 col-sm-12">
                    <ElectricGamesHeader/>
                </div>

                <div className="col-lg-8 col-md-12 col-sm-12 bg-danger bg-opacity-75 p-5 ">

                    <div className="row d-flex justify-content-center">
                        <button className="col btn w-50 btn-lg rounded-1 m-2" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button"><Link to="/games" className="text-dark text-decoration-none">YOUR GAMES</Link></button>
                        <button className="col btn w-50 btn-lg rounded-1 m-2" style={{backgroundImage: "linear-gradient(rgb(79,187,51), rgb(32,89,59)"}} type="button"><Link to="/characters" className="text-dark text-decoration-none">YOUR CHARACTERS</Link></button>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-lg btn-transparent btn-outline-success rounded-1 w-50 m-2" style={{outlineColor: "rgb(32,89,59)"}}><Link to="/quiz" className="text-success text-decoration-none">TAKE A QUIZ</Link></button>
                    </div>

                </div>

            </div>

        </main>
    )
}
export default HomePage;