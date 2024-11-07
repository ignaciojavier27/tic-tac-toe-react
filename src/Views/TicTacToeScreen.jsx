import '../components/tic-tac-toe/tic-tac-toe.css'
import TicTacToe from '../components/tic-tac-toe/TicTacToe'
const TicTacToeScreen = () => {


    return (
    <main className="container-md my-5 d-flex flex-column justify-content-center align-items-center">
        <h2 className="fw-bold mb-2">Tic Tac Toe</h2>
        <TicTacToe />
    </main>
    )
}

export default TicTacToeScreen
