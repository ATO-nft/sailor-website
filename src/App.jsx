import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Mint from "./components/Mint";
import Artwork from "./components/Artwork";
import Roadmap from "./components/Roadmap";
import Gallery from "./components/Gallery";
import Artist from "./components/Artist";
import Vision from "./components/Vision";
import Gallery2 from "./components/Gallery2";

function Index() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-2" element={<Gallery2 />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export default Index;