import { useState,  useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import TurnDisplay from './components/TurnDisplay'
import Winner from './components/Winner'
import Header from './components/Header'
import Footer from './components/Footer'
import confetti from 'canvas-confetti'
function App() {
  const turn = {
    X: "×",
    O: "○"
  }

  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentTurn, setTurn] = useState(turn.X)
  const [winner, setWinner] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  function changeWinner(win){
    setWinner(win)
  }

  useEffect(() => {
    if(winner === true){
      confetti()
      setGameOver(true)
    }
    else if(winner === false){
      setGameOver(true)
    }
  },[winner])

  function changeBoard(newBoard){
    setBoard(newBoard)
  }
  
  function changeTurn(){
    setTurn(prev => {
      if(prev === turn.X) return turn.O
      else return turn.X
    })
  }

  function reset(){
    setBoard(Array(9).fill(null))
    setTurn(turn.X)
    setWinner(null)
    setGameOver(false)
  }

  return (
    <>
      <Header/>
      <Board currentTurn = {currentTurn} changeTurn={changeTurn} changeWinner={changeWinner} changeBoard={changeBoard} board={board} winnerCondition={winner} gameOver={gameOver}/>
      <TurnDisplay currentTurn = {currentTurn} turn = {turn}/>
      <button onClick={reset} className='resetBtn'>RESET</button>
      <Winner winner={winner} reset={reset}/>
      <Footer/>
    </>
  )
}

export default App
