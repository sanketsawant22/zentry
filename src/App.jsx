import React from "react";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import About from "./component/About.jsx";
import Features from "./component/Features.jsx";
import Story from "./component/Story.jsx"; 
import Contact from "./component/Contact.jsx";   
import Footer from "./component/Footer.jsx";   

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
