import React from "react";
import BasicGrid from "../grid/grid";
import "./app.css";
import PlayerButton from "../buttons/button";

const app = () => {
    return (
        <>
            <div  className="wrapper">
                <div className="wrapper_square">
                    <BasicGrid size={3}/>
                </div>
                <div style={style} className="player_buttons">
                    <PlayerButton/>            
                </div>
            </div>
        </>
        
    )
}

const style = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginLeft: 30
}




export default app;