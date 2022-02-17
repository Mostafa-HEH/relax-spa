import { Routes, Route } from "react-router-dom";
import Navbar from "./Layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
