import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-nunito">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
