import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Component/Home"
import Project from "./Component/Projects"
import Header from "./Component/Header"
import NotFoundHandler from "./Component/NotFound"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './Component/Footer';

function App() {
  return (

    <div className="App" style={{backgroundColor: "#EAE5E5", height: "100vh"}}>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={Project} />
        {/* <Route component={NotFoundHandler} /> */}
      </Router>
      <Footer/>
    </div >

  );
}

export default App;
