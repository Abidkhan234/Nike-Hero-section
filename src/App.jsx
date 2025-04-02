import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
