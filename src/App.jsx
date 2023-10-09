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
import MarketCalendar from "./Components/MarketCalendar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market/calendar" element={<MarketCalendar />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/cafe/category" element={<CategoryMenu />} />
          <Route path="/:category" element={<Menu />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/books" element={<BookList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
