import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
gridroot:{
    width:'100%'
},
head:{
    fontFamily:"Arial Helvetica sans-serif",
    fontWeight:'bold',
    color:'#079039',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:10 
},
sub:{
    fontFamily:"Arial Helvetica sans-serif",
    fontWeight:'bold',
    fontSize:19,
    marginTop:20,
    color:'#C35FAF',
    display:'flex',
    justifyContent:'center',
    alignItems:'center' ,
    width:'90%',
    margin:10
},
desc:{
    fontFamily:"Arial Helvetica sans-serif",
    fontWeight:'bold',
    fontSize:20,
    color:'#6b6565',
    display:'flex',
    justifyContent:'center',
    alignItems:'center' ,
    wordSpacing:3,
    letterSpacing:1,
    width:'90%',
    // textAlign:'justify',
    margin:10
}
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container style={{marginTop:'10%'}}>
          <Grid item md={6} xs={12} sm={12} className={classes.gridroot}>
            <Typography className={classes.head} variant="h3">
              Quality Service & Professional Repairs
            </Typography>
            <Typography className={classes.sub} variant="h6">
              My Favorite Plumber services Downingtown, West Chester and Poll
              areas
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} sm={12} className={classes.gridroot}>
            <Typography className={classes.desc} variant="body1">
              Whether a simple faucet repair or a complex bathroom remodelling,
              at My favorite Plumber, we pride ourselves on attention to detail
              and customer satisfaction. My favorite Plumber is commited to
              serving our customers with the highest quality service and
              Professional repairs
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Content;
