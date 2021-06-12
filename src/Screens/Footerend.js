import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logo from "../NewImage/logo.jpg";

const useStyles = makeStyles(() => ({
  img: {
    height: "100px",
  },
//   top:{
//     fontSize:'20px'  
//   },
  first:{
      marginTop:30,
    //   fontSize:18
  }
}));

const Footerend = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:'10%'}}>
      <Container style={{padding:0}}>
        <Grid container>
          <Grid item md={3} xs={12} sm={6}>
            <img className={classes.img} src={logo} />
          </Grid>
          <Grid item md={2} xs={12} sm={6} style={{margin:20}}>
            <Typography className={classes.top} variant="h6">About Us</Typography>
            <Typography className={classes.first} variant="h6">Testimonials</Typography>
            <Typography className={classes.first} variant="h6">Coupons</Typography>
          </Grid>
          <Grid item md={3} xs={12} sm={6} >
            <Typography style={{margin:20}} variant="h6">Basement and crawl space</Typography>
            <Typography style={{margin:20}} variant="h6">Backflow services</Typography>
            <Typography style={{margin:20}} variant="h6">Bathroom</Typography>
            <Typography style={{margin:20}} variant="h6">Kitchen</Typography>
            <Typography style={{margin:20}} variant="h6">Laundary room</Typography>
          </Grid>
          <Grid item md={3} xs={12} sm={6} >
            <Typography style={{margin:20}} variant="h6">Basement and crawl space</Typography>
            <Typography style={{margin:20}} variant="h6">Backflow services</Typography>
            <Typography style={{margin:20}} variant="h6">Bathroom</Typography>
            <Typography style={{margin:20}} variant="h6">Kitchen</Typography>
            <Typography style={{margin:20}} variant="h6">Laundary room</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footerend;
