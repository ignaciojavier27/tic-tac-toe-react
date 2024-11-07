import { useState } from "react";
import Square from "./Square";

const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const TicTacToe = () => {
    
    const TURNS = ['X','0'];
    const initialBoard = Array(9).fill(null);

    const [board, setBoard] = useState(initialBoard);
    const [turn, setTurn] = useState(TURNS[0]);
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {

        const newBoard = [...board];

        if(newBoard[index] || winner){
            console.log('aa');
            return;
        }else{
            newBoard[index] = turn;
            setBoard(newBoard);
            const newWinner = checkWinner(newBoard);
            checkEndGame(newBoard);
            if(newWinner){
                setWinner(newWinner);
                console.log(newWinner + ' gana');
            }else{
                turn === TURNS[0]
                ? setTurn(TURNS[1]) 
                : setTurn(TURNS[0]);
            }
        }

        
    }

    const checkWinner = (board) => {
        let boardToCheck = board;
        for(const combo of WIN_CONDITIONS){
            const [ a, b, c ] = combo;
            if(
                boardToCheck[a] 
                && boardToCheck[a] === boardToCheck[b] 
                && boardToCheck[a] === boardToCheck[c]
            ){
                return boardToCheck[a]
            }
        }
        return null;
    }

    const checkEndGame = (board) => {
        if(board.every(square => square !== null)){
            console.log("Juego Terminado");
            setBoard(initialBoard);
            setWinner(null);
        }
    }

    return (
    <section>
        <article className="board">
            {
                board.map((square,index) => <Square 
                                                key={index} 
                                                index={index}
                                                updateBoard={updateBoard}
                                            >
                                                {square}
                                            </Square>) 
            }
        </article>
    </section>
    )
}

export default TicTacToe
