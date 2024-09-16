import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Articles from "./views/Articles";
import Blog from "./views/Blog";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
const Layout = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Contacto />
      <Footer/>
    </Router>
  );
};

export default Layout;
