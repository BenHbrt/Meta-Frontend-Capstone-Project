import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ReactComponent as Logo } from './img/Logo.svg'

import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="title_bar">
          <Logo />
          <Navigation />
        </div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/bookingpage" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
