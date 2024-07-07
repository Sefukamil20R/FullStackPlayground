import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mainn from "./components/Mainn";
import Footer from "./components/Footer";
import Mac from "./pages/mac";
import Iphone from "./pages/iphone";
import Four04 from "./pages/Four404";
import "./resource/css/bootstrap.css";
import "./resource/css/styles.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainn />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          Routes
          <Route path="*" element={<Four04 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
