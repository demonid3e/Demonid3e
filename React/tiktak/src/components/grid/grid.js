import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '../item-square/item-square';

const style = {
    margin: "5px",
}

export default function BasicGrid(props) {
  return (
      <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid style={style} item xs={props.size}>
            <Item current="X"></Item>
            </Grid>
            <Grid style={style} item xs={props.size}>
            <Item current = "O"></Item>
            </Grid>
            <Grid style={style} item xs={props.size}>
            <Item current = "X" ></Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid style={style} item xs={props.size}>
            <Item current="X"></Item>
            </Grid>
            <Grid style={style} item xs={props.size}>
            <Item current = "O"></Item>
            </Grid>
            <Grid style={style} item xs={props.size}>
            <Item current = "X" ></Item>
            </Grid>
        </Grid>
        </Box>    
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid style={style} item xs={props.size}>
            <Item current="X"></Item>
            </Grid>
            <Grid style={style} item xs={props.size}>
            <Item current = "O"></Item>
            </Grid>
            <Grid style={style} item xs={props.size}>
            <Item current = "X" ></Item>
            </Grid>
        </Grid>
        </Box>          
      </>
    
  );
}
