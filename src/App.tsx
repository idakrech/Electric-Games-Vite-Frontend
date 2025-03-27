import './App.css'
import background from './assets/background.jpg'
import Router from './Navigation/Router'

function App() {

  return (
    <div style={{backgroundImage: `url(${background})`, backgroundSize: "auto", backgroundAttachment: "fixed", height: "350vh"}}>
      <Router/>
    </div>
  )
}

export default App
