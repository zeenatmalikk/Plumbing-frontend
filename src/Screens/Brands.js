import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo1 from "../NewImage/6th-sec-logo1.png";
import logo2 from "../NewImage/6th-sec-logo2.png";
import logo3 from "../NewImage/6th-sec-logo3.png";
import logo4 from "../NewImage/6th-sec-logo4.png";

const useStyles = makeStyles(() => ({
  margin: {
    display: "flex",
    justifyContent: "space-between",
  },
  subhead: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bolder",

    margin: 10,
    fontSize: 23,
    lineHeight:2
  },
  space:{
    margin:30

  }
}));

const Brands = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:'10%', }}>
      <Container style={{padding:0, backgroundColor:'#EEEEEE'}}>
        <Typography className={classes.subhead} variant="body1">
          Brands we work with
        </Typography>
        <Grid container className={classes.margin}>
          {/* <div classname={classes.margin}> */}
          <Grid item md={2} className={classes.space}>
            <img src={logo1} />
          </Grid>
          <Grid item md={2} className={classes.space}>
            <img src={logo2} />
          </Grid>
          <Grid item md={2} className={classes.space}>
            <img src={logo3} />
          </Grid>
          <Grid item md={2} className={classes.space}>
            <img src={logo4} />
          </Grid>
          {/* </div> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Brands;
