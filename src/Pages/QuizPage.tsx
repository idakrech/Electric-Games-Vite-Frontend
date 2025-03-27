import Quiz from "../Components/Quiz"

const QuizPage = () => {
    return (
        <main className="container d-flex justify-content-center">      
                
            <div className="container row d-flex justify-content-center">

                <div className="col-lg-8 col-md-12 col-sm-12">
                    <Quiz/>
                </div>

            </div>
        
        </main>
    )
}

export default QuizPage;