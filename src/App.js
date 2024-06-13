import React, { useState } from "react";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <div className="motion-safe:animate-fadeIn scroll-smooth">
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/Home" element={<Home showAlert={showAlert} />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <br />
        <Alert alert={alert} />
        <Footer />
      </div>
    </>
  );
};

export default App;
