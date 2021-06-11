import { Container, Grid, makeStyles, Typography,Button } from "@material-ui/core";
import React from "react";
import { Phone } from "@material-ui/icons";

import plumber from "../NewImage/7th-sec-img1.jpg";
import plumber2 from "../NewImage/7th-sec-img2.jpg";

import "./Banner.css";

const useStyles = makeStyles(() => ({
  img: {
    height: "350px",
    width: "100%",
  },
  txt: {
    position: "absolute",
    marginTop: -200,
    color: "#fff",
  },
  centertxt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    color: "#fff",
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    fontSize: 34,

    wordSpacing: 3,
    letterSpacing: 1,
    width: "90%",
    margin: 40,
  },
  sub: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: "#fff",
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    fontSize: 24,
    wordSpacing: 1,
    letterSpacing: 1,
    width: "100%",
  },
  your: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 69,
 fontWeight:'bold',
 color:'#fff'
  },
  plumbing:{
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 69,
 fontWeight:'bold',
 color:'#82C341'
  },
  worries:{
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 69,
 fontWeight:'bold',
 color:'#fff'

  },
  ends:{
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 69,
 fontWeight:'bold',
 color:'#82C341'

  },
  here:{
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: 69,
 fontWeight:'bold',
 color:'#fff'

  },
  head: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  center:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  btn:{
      backgroundColor:'#AA198D',
      color:'#fff',
      fontWeight:'bold',
      borderRadius:'20px',
      marginBottom:"5%"
      
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{ marginBottom: 20, padding: 0, backgroundColor:"#82C341" }}>
        <Grid container style={{height:'40vh'}}>
          <Grid item md={4} xs={12} sm={12} className='bgimg7'>
            {/* <img className={classes.img} src={plumber} /> */}
          </Grid>
          <Grid item md={4} xs={12} sm={12} className='img7' >
            <div>
            
                {/* <Typography
                  style={{
                    position: "absolute",
                    marginTop: -200,
                    color: "#fff",
                    marginLeft:46,
                    
                  }}
                  variant="h4"
                >
                  Prices that won't drain your wallet
                </Typography> */}
              </div>
            
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sm={12}
            style={{ backgroundColor: "#8AD441" }}
          >
            <Typography className={classes.centertxt} variant="h6">
              Fast service is a call away
            </Typography>
            <hr style={{}}></hr>
            <Typography className={classes.sub} variant="body1">
              Request a free job estimate
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} xs={12} sm={12} className="banner">
            <div
             style={{marginTop:'10%'}}
            >
              <Typography className={classes.your} variant="h3">
                Your
              </Typography>
              <Typography className={classes.plumbing} variant="h3">
                Plumbing
              </Typography>
              <Typography className={classes.worries} variant="h3">
                Worries
              </Typography>
              <Typography className={classes.ends} variant="h3">
                Ends Here
              </Typography>
           
            </div>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item md={4} xs={12} sm={6}>
            <Typography className={classes.head} variant="h6">
              Downtown
            </Typography>
           <div className={classes.center}>
           <Button className={classes.btn} variant="contained">
              <Phone style={{marginRight:10}}/> Call: 610-2695874
            </Button>
           </div>
          </Grid>
          <Grid item md={4} xs={12} sm={6}>
            <Typography className={classes.head} variant="h6">
              West Chester
            </Typography>
           <div className={classes.center}>
           <Button className={classes.btn} variant="contained">
              <Phone style={{marginRight:10}}/> Call: 610-2695874
            </Button>
           </div>
          </Grid>
          <Grid item md={4} xs={12} sm={6}>
            <Typography className={classes.head} variant="h6">
             Paoli
            </Typography>
           <div className={classes.center}>
           <Button className={classes.btn} variant="contained">
              <Phone style={{marginRight:10}}/> Call: 610-2695874
            </Button>
           </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
