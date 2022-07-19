import React from "react";
import { Button } from "@mui/material";


const PlayerButton = (props) => {


    return (
        <>
            <div className="controls">
                <Button onClick={() => {props.setFieldValues(["","","","","","","","",""]);  props.setCurrentPlayer("Player 1")} } style={style} variant = "contained">Start</Button>
            </div>
            <div className="players">
                <div>Current player:{props.currentPlayer} </div>
                {/* <Button onClick={() => props.setCurrentPlayer("Player 1")} style={style} variant = "contained">Player 1</Button>
                <Button onClick={() => props.setCurrentPlayer("Player 2")} style={style} variant = "contained">Player 2</Button> */}
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