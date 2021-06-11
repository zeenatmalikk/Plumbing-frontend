// import logo from './logo.svg';
import "./App.css";
import Navheader from "./Navheader/Navheader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Screens/Content";
import Services from "./Screens/Services";
import Phonecall from "./Screens/Phonecall";
import Weoffer from "./Screens/Weoffer";
import imagesss from "../src/NewImage/1st-sec-bg.jpg";
import Review from "./Screens/Review";
import Brands from "./Screens/Brands";
import Banner from "./Screens/Banner";
import Blogs from "./Screens/Blogs";
import Form from "./Screens/Landing";
import Landing from "./Screens/Landing";
import Formfooter from "./Screens/Formfooter";

function App() {
  return (
    <Router>
      <div>
        <Navheader />

        <Landing />

        <Content />
        <Services/>
        <Phonecall />
        <Weoffer />
        <Review />
        <Brands />
        <Banner />
        <Blogs />
        <Formfooter />
      </div>
    </Router>
  );
}

export default App;
