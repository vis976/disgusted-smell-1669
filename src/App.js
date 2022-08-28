import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import OutlookLogo from "./Components/OutlookLogo";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./FooterItems/Footer";
function App() {
  return (
    <div>
      <OutlookLogo />
      <Navbar />
      <AllRoutes />
      <Footer />

    </div>
  );
}

export default App;
