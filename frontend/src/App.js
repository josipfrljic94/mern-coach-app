import React from 'react';
import './App.css';
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Coaches from "./components/Coaches";

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Footer/>
      <Coaches/>
    </div>
  );
}

export default App;
