import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </main>
  );
}
