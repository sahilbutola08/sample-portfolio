import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './App.css'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;