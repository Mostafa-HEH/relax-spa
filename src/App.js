import { Routes, Route } from "react-router-dom";

import Navbar from "./Layouts/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ConnectUs from "./Pages/ConnectUs";
import Reservation from "./Pages/Reservation";
import ProductDetails from "./Layouts/ProductDetails";
import Footer from "./Layouts/Footer";
import PopupSubscription from "./Layouts/PopupSubscription";

function App() {
  return (
    <>
      <Navbar />
      <PopupSubscription />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/:productId" element={<ProductDetails />} />
        <Route exact path="/connectus" element={<ConnectUs />} />
        <Route exact path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
