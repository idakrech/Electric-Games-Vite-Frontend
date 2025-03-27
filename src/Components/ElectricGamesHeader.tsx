import ciri from "../Images/ciri.png"

const ElectricGamesHeader = () => {
    return (
        <div className="row mt-5 pt-2">

            <div className="col-lg-8 col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
                <div className="w-75">
                    <h1 className="text-light text-center" style={{fontFamily: "Electrolize", fontSize: "4rem"}}>ELECTRIC GAMES</h1>
                    <h6 className="text-light text-center" style={{fontFamily: "Electrolize"}}>your collection of games and game characters</h6>     
                </div>
            </div>

            

            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-start">
                <img src={ciri} style={{height: "18rem"}} alt=""/>
            </div>
        </div>
    )
}
export default ElectricGamesHeader;