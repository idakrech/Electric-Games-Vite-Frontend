import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import GamesPage from "../Pages/GamesPage";
import CharactersPage from "../Pages/CharactersPage";
import QuizPage from "../Pages/QuizPage";
import NavigationList from "./NavigationList";


const Router = () => {
    return (
        <BrowserRouter>

            <NavigationList/>

            <Routes>
                
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/games" element={<GamesPage/>}></Route>
                <Route path="/characters" element={<CharactersPage/>}></Route>
                <Route path="/quiz" element={<QuizPage/>}></Route>
                
            </Routes>
            
        </BrowserRouter>
    )
}

export default Router;