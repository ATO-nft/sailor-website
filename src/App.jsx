import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Mint from "./components/Mint";
import Artwork from "./components/Artwork";
import Roadmap from "./components/Roadmap";

function Index() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default Index;