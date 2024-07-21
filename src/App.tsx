import React, { useEffect, useState } from "react";
import "./Animations.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechContainer from "./components/Technologies/TechContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import About from "./components/about";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <About />
        <TechContainer />
        <ProjectsContainer />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
