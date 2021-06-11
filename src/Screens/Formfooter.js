import {
    Button,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
head:{
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bolder",
    color: "#fff",
    // width:'92%',
textAlign:'center',
    marginTop: '10%',
    fontSize: 38,
},
list:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    textAlign:'center'
},
item:{
    fontFamily: "Arial Helvetica sans-serif",
    // fontWeight: "bolder",
    color: "#fff",
    // width:'92%',
// textAlign:'center',
    // marginTop: 20,
    fontSize: 28,
},
req:{
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bolder",
    color: "#268856",
    // width:'92%',
textAlign:'center',
    marginTop: '10%',
    fontSize: 28,
},
name:{
    width:'80%',
    marginTop:20,
color:"#268856"
},
phone:{
    width:'80%',
    marginTop:20
},
txtf:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
},
btnstyle:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:20,
    marginBottom:'10%'

},
btn:{
    backgroundColor:'#AA198D',
    color:'#fff',
    fontWeight:'bold',
    borderRadius:'20px',
    marginBottom:"5%"
}
}));

const Form = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:'10%'}}>
      <Container style={{padding:0, }}>
        <Grid container >
          <Grid item md={6} xs={12} sm={12} style={{backgroundColor:'#82C341'}}>
            <Typography className={classes.head} variant="h4">Plumbing Problems</Typography>
            <hr></hr>
            <List style={{marginLeft:"20%"}} >
              <ListItem className={classes.item} >Fast service</ListItem>
              <ListItem className={classes.item}>Upfront competing prices</ListItem>
              <ListItem className={classes.item}>Family owned and operated buiseness</ListItem>
            </List>
          </Grid>
          <Grid item md={6} xs={12} sm={12} style={{backgroundColor:'#EEEEEE'}}>
              <Typography className={classes.req} variant='h3'>
                  Request a Call back
              </Typography>
            <div className={classes.txtf}>
            <TextField variant='outlined' className={classes.name} label='First name' label='enter your name' />
              <TextField variant='outlined' className={classes.phone} label='Phone' label='enter your contact details' />
            </div>
<div className={classes.btnstyle}>
<Button variant='contained' className={classes.btn}>
    Request a Call back
</Button>
</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Form;
