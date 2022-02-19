import { Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
