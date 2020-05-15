import React, { Component } from "react";
import "./App.css";

// Component imports
import Header from './Header';
import SmurfVillage  from './SmurfVillage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SmurfVillage />
    </div>
  );
}

export default App;
