import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '../item-square/item-square';
import { useState, useEffect } from 'react';

const style = {
    margin: "5px",
}

function BasicGrid(props) {

    const [fieldValues, setFieldValues] = useState([]);

    const onClick = (id) => {
        const newArr = [...fieldValues];
        setFieldValues(newArr[id] = "X");
        console.log(newArr);
    }

    useEffect(() => console.log("useEffect"),[fieldValues]
    );

  return (
      <>
        <Box  sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="0"  style={style} item xs={props.size}>
            <Item  current={fieldValues[0]} key="d" ></Item>
            </Grid>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="1" style={style} item xs={props.size}>
            <Item current={fieldValues[1]} key={"g"} ></Item>
            </Grid>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="2" style={style} item xs={props.size}>
            <Item current={fieldValues[2]} key={fieldValues[2]} ></Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="3" style={style} item xs={props.size}>
            <Item current={fieldValues[3]} key={fieldValues[3]} ></Item>
            </Grid>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="4" style={style} item xs={props.size}>
            <Item current={fieldValues[4]} key={fieldValues[4]} ></Item>
            </Grid>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="5" style={style} item xs={props.size}>
            <Item current={fieldValues[5]} key={fieldValues[5]} ></Item>
            </Grid>
        </Grid>
        </Box>    
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="6" style={style} item xs={props.size}>
            <Item current={fieldValues[6]} key={fieldValues[6]} ></Item>
            </Grid>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="7" style={style} item xs={props.size}>
            <Item current={fieldValues[7]} key={fieldValues[7]} ></Item>
            </Grid>
            <Grid onClick={(e) => {onClick(e.currentTarget.id)}} id="8" style={style} item xs={props.size}>
            <Item current={fieldValues[8]} key={fieldValues[8]}  ></Item>
            </Grid>
        </Grid>
        </Box>          
      </>
    
  );
}

export default BasicGrid;