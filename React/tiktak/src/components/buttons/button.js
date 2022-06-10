import React from "react";
import { Button } from "@mui/material";

const PlayerButton = (props) => {
    return (
        <>
            <Button style={style} variant = "contained">Player 1</Button>
            <Button style={style} variant = "contained">Player 2</Button>
        </>

    
    )
}

const style = {
    margin: "5px",
    width: "60px",
    fontSize: "10px"
}

export default PlayerButton;