import React, { useEffect, useState } from "react";
import "./Animations.css"
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import About from "./components/about";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <About />
        <ProjectsContainer />
        <CardContainer />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
