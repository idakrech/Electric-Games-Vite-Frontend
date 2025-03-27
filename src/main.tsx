import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { GameProvider } from "./Contexts/GameContext.tsx"
import { CharacterProvider } from "./Contexts/CharacterContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameProvider>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </GameProvider>
  </StrictMode>
)
