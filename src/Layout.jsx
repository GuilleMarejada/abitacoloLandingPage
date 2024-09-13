import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Articles from "./views/Articles";
import Blog from "./views/Blog";
import Contacto from "./components/Contacto";
const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Contacto />
    </Router>
  );
};

export default Layout;
