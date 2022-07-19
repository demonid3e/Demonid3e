import React from "react";
import BasicGrid from "../grid/grid";
import "./app.css";
import PlayerButton from "../buttons/button";
import { useState } from "react";






const App = () => {





    const [currentPlayer, setCurrentPlayer] = useState("Player 1");
    const [fieldValues, setFieldValues] = useState(["","","","","","","","",""]);


  
   




    return (
        <>
            <div  className="wrapper">
                <div className="wrapper_square">
                    <BasicGrid setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} fieldValues={fieldValues} setFieldValues={setFieldValues} size={3}/>
                </div>
                <div style={style} className="player_buttons">
                    <PlayerButton setFieldValues={setFieldValues} currentPlayer ={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>            
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




export default App;