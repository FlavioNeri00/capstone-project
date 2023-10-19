import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Cafe from "./Components/Cafè";
import Menu from "./Components/Menù";
import CategoryMenu from "./Components/CategoryMenu";
import Community from "./Components/Community";
import BookList from "./Components/BookList";

import Market from "./Components/Market";
import MarketEvents from "./Components/MarketEvents";
import CartElements from "./Components/CartElements";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/market/calendar" element={<MarketEvents />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/cafe/category" element={<CategoryMenu />} />
          <Route path="/:category" element={<Menu />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/books" element={<BookList />} />
          <Route path="/cafe/cart-shop" element={<CartElements />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
