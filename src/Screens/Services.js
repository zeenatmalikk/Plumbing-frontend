import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import image from "../Home Page/3rd-sec-icon1.svg";
import image2 from "../Home Page/3rd-sec-icon2.svg";
import image3 from "../Home Page/3rd-sec-icon3.svg";
import image4 from "../Home Page/3rd-sec-icon4.svg";
import image5 from "../Home Page/3rd-sec-icon5.svg";
import image6 from "../Home Page/3rd-sec-icon6.svg";
import image7 from "../Home Page/3rd-sec-icon7.svg";
import image8 from "../Home Page/3rd-sec-icon8.svg";
import image9 from "../Home Page/3rd-sec-icon9.svg";
import image10 from "../Home Page/3rd-sec-icon10.svg";



const data = [
  {
    img: { image },
    txt: "Backflow services",
  },
  {
    img: { image2 },
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
  {
    img: "./3rd-sec-icon7.svg",
    txt: "Backflow services",
  },
];

const useStyles = makeStyles(() => ({
  head: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bolder",
    color: "#268856",
    // width:'92%',
    textAlign: "center",
    marginTop: "10%",
    fontSize: 48,
  },
  sub: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bolder",
    width: "75%",
    textAlign: "center",
    // marginTop: '10%',
    fontSize: 20,
  },
  img: {
    height: 70,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    textAlign:'center'
  },
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div>
      <Container style={{padding:0}}>
        <Typography className={classes.head} variant="h2">
          Our Plumbing Services
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className={classes.sub} variant="body1">
            We offer a variety of commercial and residential plumbing services.
            When you need flat rate pricing, free estimates and dependable
            professionals ready to serve, come to the plumbers you can trust
          </Typography>
        </div>
        <Grid container style={{marginTop:40}}>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image} />
                  <Typography className={classes.title} variant="h6">
                    Backflow Services
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image2} />
                  <Typography className={classes.title} variant="h6">
                    Basement and crawl space
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image3} />
                  <Typography className={classes.title} variant="h6">
                    Bathroom
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image4} />
                  <Typography className={classes.title} variant="h6">
                  Kitchen
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image5} />
                  <Typography className={classes.title} variant="h6">
                    Water heaters
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image6} />
                  <Typography className={classes.title} variant="h6">
                    Septic Tank/ Sewer
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image7} />
                  <Typography className={classes.title} variant="h6">
                    Pipe Installation & repair
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image8} />
                  <Typography className={classes.title} variant="h6">
                   Laundry room
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
        <Grid container>
            <Grid item md={3} />
            <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image9} />
                  <Typography className={classes.title} variant="h6">
                    Water wells and pumps
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12} sm={6}>
            <Card style={{margin:15, height:'85%'}}>
              <CardContent>
                <div className={classes.center}>
                  <img className={classes.img} src={image10} />
                  <Typography className={classes.title} variant="h6">
                    Heating and cooling
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
