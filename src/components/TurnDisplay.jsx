import React from "react";
import classNames from "classnames";

export default function TurnDisplay({currentTurn, turn}){
    let ODisplay 
    let XDisplay
    if(currentTurn === turn.O){
        ODisplay = classNames('ElementDisplay', 'ElementSelected')
        XDisplay = classNames('ElementDisplay', 'ElementNotSelected')
    }
    else{
        XDisplay = classNames('ElementDisplay', 'ElementSelected')
        ODisplay = classNames('ElementDisplay', 'ElementNotSelected')
    }
    return(
        <div className="turnDisplay">
            <div className={XDisplay}>{turn.X}</div>
            <div className={ODisplay}>{turn.O}</div>
        </div>
    )
}