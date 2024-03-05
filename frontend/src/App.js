import "./App.css";
import React from "react";
import Navbar from "./navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Events from "./pages/events.js";
import Join from "./pages/join.js";
import Photos from "./pages/photos.js";
 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/"   
          element={
          <>
            <Home />
            <About />
            <Events />
            <Join />
            <Photos />
          </>
          } 
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route 
          path="/events" 
          element={<Events />} 
        />
        <Route
          path="/join"
          element={<Join />}
        />
        <Route
          path="/photos"
          element={<Photos />}
        />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;