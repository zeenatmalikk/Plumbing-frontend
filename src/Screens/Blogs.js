import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import blogimg1 from "../NewImage/10th-sec-img1.jpg";
import blogimg2 from "../NewImage/10th-sec-img2.jpg";
import blogimg3 from "../NewImage/10th-sec-img3.jpg";


const useStyles = makeStyles(() => ({
  img: {
    height: 240,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    fontFamily: "Arial Helvetica sans-serif",
    fontWeight: "bolder",
    color: "#82C341",
    width:'92%',

    marginTop: 20,
    fontSize: 28,
  },
  sub: {
    fontFamily: "Arial Helvetica sans-serif",
    // fontWeight:'bolder',
    color: "#000",
width:'90%',
    marginTop: 20,
    fontSize: 20,
  },
  center:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  centertxt:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
flexDirection:'column'
},
bloghd:{
    textAlign:'center',
    color:"#82C341",
    lineHeight:4,
    fontWeight:'bold'
}
}));

const Blogs = () => {
  const classes = useStyles();
  return (
    <div style={{marginTop:'10%'}}>
      <Container style={{ padding: 0 }}>
          <Typography className={classes.bloghd} variant='h4'>
              Our Blogs
          </Typography>
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-between",  }}
        >
          <Grid item md={4} xs={12} sm={6} style={{ width: "100%", }}>
            <div className={classes.center}>
              <img className={classes.img} src={blogimg1} />
            </div>{" "}
           <div className={classes.centertxt}>
           <Typography className={classes.head} variant="h5">
              Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
            </Typography>
            <Typography className={classes.sub} variant="body1">
              lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem ipsum dolor
            </Typography>
           </div>
          </Grid>
          <Grid item md={4} xs={12} sm={6} style={{ width: "100%" }}>
             <div className={classes.center}>
              <img className={classes.img} src={blogimg2} />
            </div>
           <div className={classes.centertxt}>
           <Typography className={classes.head} variant="h5">
              Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
            </Typography>
            <Typography className={classes.sub} variant="body1">
              lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem ipsum dolor
            </Typography>
            </div>
          </Grid>
          <Grid item md={4} xs={12} sm={6} style={{ width: "100%" }}>
             <div className={classes.center}>
              <img className={classes.img} src={blogimg3} />
            </div>
           <div className={classes.centertxt}>
           <Typography className={classes.head} variant="h5">
              Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
            </Typography>
            <Typography className={classes.sub} variant="body1">
              lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
              dolor lorem ipsum dolor
            </Typography>
           </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blogs;
