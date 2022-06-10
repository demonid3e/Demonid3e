import React from "react";
import {Paper} from "@mui/material";




const ItemSquare = (props) => {
    return (
        <>
            <Paper style={style} className="ItemSquare" variant="outlined" square>{props.current}</Paper>
        </>
    )
}


const style = {
    margin: "5px",
    fontSize: "35px",
    width: "50px",
    height: "50px",
    textAlign: "center",
    borderSyle: "solid",
    borderColor: "green",
    borderWidth: "3px"
};

export default ItemSquare;