import { Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
