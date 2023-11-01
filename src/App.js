import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'
import EmptyPage from './components/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Navigation />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/about" element={<EmptyPage />} />
            <Route path="/menu" element={<EmptyPage />} />
            <Route path="/orderonline" element={<EmptyPage />} />
            <Route path="/login" element={<EmptyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
