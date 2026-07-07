import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx"

import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx"
import Contact from "./pages/Contact.jsx"
import Movieinfo from "./pages/Movieinfo.jsx"

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies/:search" element={<Movies />} />
          <Route path="/Movies/:search/:id" element={<Movieinfo /> }  />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
