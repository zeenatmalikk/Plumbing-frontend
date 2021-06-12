import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Contactless } from "@material-ui/icons";
import React from "react";
import headimg from "../NewImage/1st-sec-bg.jpg"
import "./Landing.css"

const useStyles = makeStyles((theme) => ({
  head: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    fontSize: 50,
    color: "#24994D",
    
    wordSpacing: 3,
    letterSpacing: 1,
    width: "90%",
    margin: 40,
  },
  sub:{
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    
    wordSpacing: 3,
    letterSpacing: 1,
    width: "60%",
    margin: 40,
    

  },
  btnstyle:{
    margin:40
  },
  btn:{
    backgroundColor:'#AA198D',
      color:'#fff',
      fontWeight:'bold',
      borderRadius:'20px',
     
  }
 
}));

const Form = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{padding:0}}>
        <Grid container >
          <Grid item md={12} xs={12} sm={12} className="bg">
            <Typography className={classes.head} variant="h5">Plumbing and heating<br></br> services</Typography>
            <Typography className={classes.sub} variant="body1">
              Lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor Lorem ipsum ethuhe dnjk dnbhsh
              dolor lorem ipsum dolorlorem ipsum dolor Lorem ipsum dolor lorem
              ipsum dolorlorem ipsum dolor Lorem ipsum dolor lorem ipsum
              dolorlorem ipsum dolor
            </Typography>
            <div className={classes.btnstyle}>
            <Button className={classes.btn} variant="contained">Request a job estimate</Button>

            </div>
          </Grid>
         
        </Grid>
      </Container>
    </div>
  );
};

export default Form;
