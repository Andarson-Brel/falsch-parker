import { Route, Routes } from "react-router-dom";
import PageHeading from "./components/PageHeading";

import FullControlCard from "./components/cards/FullControlCard";
import HeroCard from "./components/cards/HeroCard";
import PageLargeCardWithCurve from "./components/cards/PageLargeCardWithCurve";
import ProductCard from "./components/cards/ProductCard";
import SeeHowCard from "./components/cards/SeeHowCard";
import SeeHowItWorksWithToolbar from "./components/cards/SeeHowItWorksWithToolbar";
import Claim from "./components/cards/claim";
import Accordion from "./components/sections/Accordion";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ParkingTicketPage from "./pages/ParkingTicketPage";
import TowingPage from "./pages/TowingPage";
import FuelFraudPage from "./pages/FuelFraudPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const icons = [
    "./images/briefcase.webp",
    "./images/clipboard.webp",
    "./images/clipboard.webp",
  ];
  const description =
    "You’re allowed to tow wrong parkers on your private parking.";
  const spanHead = "Need to";
  const heading = " fine wrong     parkers?";
  const imgSrc = "./images/iPhone-14-Pro-05.webp";
  const howToDesc =
    "To ensure legal certainty, take a clear photo of the illegally parked vehicle with its license plate visible. Remember, a court prohibition notice is required for compensation claims.";
  const howToHead = "Tow away.";
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/parking-ticket" element={<ParkingTicketPage />} />
        <Route path="/towing" element={<TowingPage />} />
        <Route path="/fuel-fraud" element={<FuelFraudPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
