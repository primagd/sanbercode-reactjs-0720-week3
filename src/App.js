import React from 'react';
import './App.css';
// import HargaBuah from './tugas11/HargaBuah';
// import Timer from './tugas12/Timer';
// import TabelBuah from './tugas13/List';
// import List from './tugas14/HargaBuah';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './tugas15/Routes';
import Nav from './tugas15/NavBar';



function App() {
  return (
    // <div>
    //   Tugas1
    //   <HargaBuah />
    //   Tugas2
    //   <Timer/>
    //   Tugas3
    //   <TabelBuah/>
    //   Tugas4
    //   <List/>
    // </div>
    <Router>
    <Nav />
    <Routes />
  </Router>

  );
}

export default App;
