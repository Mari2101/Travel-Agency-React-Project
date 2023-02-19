import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Logo from "./components/logo/Logo";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import TravelTips from "./components/travelTips/TravelTips";
import Tours from "./components/tours/Tours";
import ArticleDetails from "./components/travelTips/Articles/ArticleDetails";
import TourDetails from "./components/tours/TourDetails";
import NotFound from "./components/404/NotFound";
import { useState } from "react";
import toursData from "./data/toursData";

const App = (): JSX.Element => {
  const [toursArray, setToursArray] = useState(toursData);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Logo />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/tours"
            element={<Tours setToursArray={setToursArray} />}
          />
          <Route
            path="/tours/:id"
            element={<TourDetails toursArray={toursArray} />}
          />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/travel-tips/:id" element={<ArticleDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
