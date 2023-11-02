import React from "react";

export default function Winner({winner, reset}){
    const h3 = winner === true ? "We have a winner!!" : "We have a tie." 
    const h4 = winner === true ? "Congratulations to the winner!" : "Try a better strategy next time"
    return(
        <div className={winner === true ? "winnerDisplay" : winner === false ? "winnerDisplay" : "displayNone"}>
            <div className="card">
                <h3>{h3}</h3>
                <h4>{h4}</h4>
                <button onClick={reset} className="resetBtn">Reset</button>
            </div>
        </div>
    )
}