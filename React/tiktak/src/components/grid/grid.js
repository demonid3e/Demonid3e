import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '../item-square/item-square';
import { useEffect } from 'react';

const style = {
    margin: "5px",
}

function BasicGrid(props) {

    
    const checkWin = (value) => {
    
        if(value[0] === "X" && value[1] === "X" && value[2] === "X"){
            console.log("Player 1 Won");
        }

    }


    const changePlayer = () => {
        console.log(props.currentPlayer, props.fieldValues);
        if(props.currentPlayer === "Player 1" && props.fieldValues !== ["","","","","","","","",""]) {
            props.setCurrentPlayer("Player 2");
        } else {
            props.setCurrentPlayer("Player 1");
        }
    }



    const onClick = (id) => {
        const newArr = [...props.fieldValues];
        if (newArr[id] === ""){
            if(props.currentPlayer === "Player 1"){
                newArr[id] = "X";
                props.setFieldValues(newArr);
            } else {
                newArr[id] = "O";
                props.setFieldValues(newArr);
  

            }
 
        } 
        changePlayer();
        

    }

    useEffect(() => checkWin(props.fieldValues));

 

  return (
      <>
        <Box  sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {props.fieldValues.map((item, i) => (
                    <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id={i} key={i}  style={style} item xs={props.size}>
                        <Item key={i + "item"}current={props.fieldValues[i]} >{item}</Item>
                    </Grid>
                ) )}
            </Grid>
        </Box> 
      </>
    
  );
}

export default BasicGrid;