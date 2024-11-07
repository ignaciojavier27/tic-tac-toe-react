import { Routes, Route } from "react-router-dom"
import MainScreen from "./Views/MainScreen"
import TicTacToeScreen from "./Views/TicTacToeScreen"


function App() {

  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/tic-tac-toe" element={<TicTacToeScreen />} />
      <Route path="*" element={<MainScreen />} />
    </Routes>
  )
}

export default App
