import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Mint from "./components/Mint";
import Artwork from "./components/Artwork";

function Index() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/artwork" element={<Artwork />} />
      </Routes>
    </Router>
  );
}

export default Index;