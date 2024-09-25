// App.js
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import Home from "./pages/Home";
import CustomScroll from "./lib/CustomScroll";
import { ThemeContext } from "./context/ThemeContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import { ScrollToTopProvider } from "./context/ScrollToTop";

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <ScrollProvider>
      <ScrollToTopProvider>
        <div
          className={
            isDarkMode
              ? "bg-primary_black text-primary_white"
              : "bg-white_mode_bg text-primary_black"
          }
        >
          <Router>
            <CustomScroll />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Router>
        </div>
      </ScrollToTopProvider>
    </ScrollProvider>
  );
};

export default App;
