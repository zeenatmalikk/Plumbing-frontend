import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import newimage from "../NewImage/4th-sec-img.png";
// import Logo from "../Logo.svg"

const useStyles = makeStyles((theme) => ({
  head: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    fontSize: 45,
    color: "#82C341",
    margin: 10,
    wordSpacing: 3,
    letterSpacing: 1,
    width: "80%",
  },

  sub: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bold",
    fontSize: 20,
    color: "#82C341",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    wordSpacing: 3,
    letterSpacing: 1,
    width: "90%",
    margin: 10,
  },
  CheckCircleOutlineIcon: {
    color: "#82C341",
  },
  listitem: {
    fontSize: 24,
    fontFamily: "Arial Helvetica sans-serif",
    marginLeft: 10,
    fontWeight: "bold",
  },
  margin: {
    margin: 10,
  },
  btnstyle: {
    backgroundColor: "#AA198D",
    color: "#fff",
    borderRadius: "20px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img:{
   display:'none',
   height:300,
   paddingTop:'30%',
   paddingLeft:'30%',
   [theme.breakpoints.up("sm","xs")]: {
    display: "block",
  },
  },
  cont:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}));

const Weoffer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{backgroundColor:"#EEEEEE", marginTop:'10%'}}>
        <Grid container>
          <Grid item md={6} sx={12} sm={12}>
            <Typography className={classes.head} variant="h2">
              What we offer
            </Typography>
            <Typography className={classes.sub} variant="h6">
              We are dedicated to providing comprehensive plumber electrician
              and heating services
            </Typography>
            <List>
              <ListItem>
                <CheckCircleOutlineIcon style={{ color: "#82C341" }} />
                <Typography className={classes.listitem}>
                  No fee local london call outs
                </Typography>
              </ListItem>

              <ListItem>
                <CheckCircleOutlineIcon style={{ color: "#82C341" }} />
                <Typography className={classes.listitem}>
                  No fee local london call outs
                </Typography>
              </ListItem>
              <ListItem>
                <CheckCircleOutlineIcon style={{ color: "#82C341" }} />
                <Typography className={classes.listitem}>
                  No fee local london call outs
                </Typography>
              </ListItem>
              <ListItem>
                <CheckCircleOutlineIcon style={{ color: "#82C341" }} />
                <Typography className={classes.listitem}>
                  No fee local london call outs
                </Typography>
              </ListItem>
              <ListItem>
                <CheckCircleOutlineIcon style={{ color: "#82C341" }} />
                <Typography className={classes.listitem}>
                  No fee local london call outs
                </Typography>
              </ListItem>
              <ListItem>
                <CheckCircleOutlineIcon style={{ color: "#82C341" }} />
                <Typography className={classes.listitem}>
                  No fee local london call outs
                </Typography>
              </ListItem>
            </List>
            <div className={classes.margin}>
              <Button className={classes.btnstyle} variant="contained">
                Discover More
              </Button>
            </div>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <div className={classes.cont}>
              <img className={classes.img} src={newimage} />
            </div>
          </Grid>
        </Grid>
        
      </Container>
    </div>
  );
};

export default Weoffer;
