import {NavLink} from "react-router-dom";

const NavigationList = () => {
    return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark text-center" style={{backgroundColor: "rgb(9,12,51)"}}>
                
                <a className="navbar-brand ms-3" style={{fontFamily: "Electrolize"}} href="">Electric Games</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                
                    <ul className="navbar-nav text-center">
                        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/games" className="nav-link">All Games</NavLink></li>
                        <li className="nav-item"><NavLink to="/characters" className="nav-link">All Characters</NavLink></li>
                        <li className="nav-item"><NavLink to="/quiz" className="nav-link">Quiz</NavLink></li>
                    </ul>
                </div>
                
            </nav>
    )
}

export default NavigationList;