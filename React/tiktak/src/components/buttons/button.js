import React from "react";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";


const PlayerButton = (props) => {

    const [currentPlayer, setCurrentPlayer] = useState(null);


    const onPlayerChange = (player) => {
        setCurrentPlayer(player);
    }

    return (
        <>
            <div className="controls">
                <Button style={style} variant = "contained">Start</Button>
            </div>
            <div className="players">
                <div>Current player:{currentPlayer} </div>
                <Button onClick={()  => onPlayerChange("Player 1")} style={style} variant = "contained">Player 1</Button>
                <Button onClick={() => onPlayerChange("Player 2")} style={style} variant = "contained">Player 2</Button>
            </div>
        </>

    
    )
}

const style = {
    margin: "5px",
    width: "60px",
    fontSize: "10px"
}

export default PlayerButton;