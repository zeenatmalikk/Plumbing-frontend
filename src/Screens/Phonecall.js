import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({

    border:{
backgroundColor:'#82C341',
border:'20px double white',
padding:40
    },
head:{
    fontFamily:"Arial Helvetica sans-serif",
    fontWeight:'bold',
    color:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    wordSpacing:3,
    letterSpacing:1,
    textTransform:'capitalize',

},

btn:{
    
    display:'flex',
    justifyContent:'center',
    alignItems:'center' ,
    
},
btnstyle:{
    fontFamily:"Arial Helvetica sans-serif",
    fontSize:16,
    borderRadius:'20px',
    backgroundColor:'#AA198D',
    color:'#fff'
}
}));

const Phonecall = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:'10%'}}>
      <Container style={{padding:0}}>
        <Grid container className={classes.border}>
          <Grid item md={6} xs={12} sm={12} className={classes.margin}>
            <div style={{margin:20}}>
            <Typography className={classes.head} variant="h4">We are just a phonecall away</Typography>

            </div>
          </Grid>
          <Grid item md={6} xs={12} sm={12} className={classes.btn}>
              <div style={{margin:20}}>
              <Button className={classes.btnstyle} variant='contained' >
                  Request a job estimate
              </Button>
              </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Phonecall;
