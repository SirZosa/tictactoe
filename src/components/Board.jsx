import React from "react";

export default function Board({currentTurn, changeTurn, changeWinner, changeBoard, board, winnerCondition, gameOver}){

    function fillTable(turn, index){
        if(gameOver === false){
            if(!board[index]){
                let newBoard = [...board]
                newBoard[index] = turn  
                changeBoard(newBoard)
                const winner = checkWinningCondition(newBoard)
                changeWinner(winner)
                checkTie(newBoard)
                changeTurn()
            }
        }
        else return
    }

    function checkWinningCondition(board){
        for(let combo of winningConditions){
            const [a,b,c] = combo
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                return true
            }
        }
    }

    function checkTie(boardAr){
        const boardFull = boardAr.every(element => element !== null)
        if(boardFull && !winnerCondition){
            changeWinner(false)
        }
    }

    const boardTable = board.map((Element, index) => {
        return (
            <div key={index} className="boardElement" onClick={() => fillTable(currentTurn, index)} >
                {Element}
            </div>
        )
    })

    const winningConditions = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    return (
        <div className="tableCard">
            <div className="table">
                {boardTable}
            </div>
        </div>
    )
}