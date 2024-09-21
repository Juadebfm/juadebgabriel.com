// App.js
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import Home from "./pages/Home";
import CustomScroll from "./lib/CustomScroll";

const App = () => {
  return (
    <ScrollProvider>
      <div className="bg-primary_black text-primary_white">
        <Router>
          <Navbar />
          <CustomScroll />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ScrollProvider>
  );
};

export default App;
