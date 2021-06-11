import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import secondimg from "../NewImage/5th-sec-img.png";

const useStyles = makeStyles(() => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'column'
  },
  rev:{
    textAlign:'center',
    fontFamily:"Arial Helvetica sans-serif",
    fontWeight:'bold',
    color:'#079039',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    fontSize:28,


  },
  txt:{
    textAlign:'center',
    fontFamily:"Arial Helvetica sans-serif",
    fontWeight:'bolder',
    color:'#AF2794',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    fontSize:22,
  }
}));

const Review = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{marginTop:'10%'}}>
        <Grid item md={12} xs={12} sm={12} className={classes.center}>
          <div className={classes.center}>
            <img style={{ height: 70, marginTop: 20 }} src={secondimg} />
          </div>
          <div style={{width:'80%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant="h6" className={classes.rev}>
            I am a realtor and hot water heater was leaking at our final walk
            through prior to settlement.We called several plumbers for their
            availablity .Marybeth was able to
          </Typography>
          </div>
          <Typography className={classes.txt} variant='h6'>
              Melissa Collins
          </Typography>
          <Typography variant='body1' color="textSecondary">
              Customer
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Review;
