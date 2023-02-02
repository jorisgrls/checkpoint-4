import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Annonces from "./pages/Annonces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Home />} />
          <Route path="/annonces/:id" element={<Annonces />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
