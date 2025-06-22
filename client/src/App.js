import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import SearchBar from './components/SearchBar';
import MyBookings from './components/MyBookings';

function App() {
  const [hotels] = useState([
    {
      name: "Taj Mahal Palace",
      location: "Mumbai",
      price: 8000,
      rating: 5,
      image: "https://tse1.mm.bing.net/th?id=OIP.wCdZMXGKhkBZEx85lBf8ZgHaEs&pid=Api&P=0&h=180"
    },
    {
      name: "Leela Palace",
      location: "Chennai",
      price: 6500,
      rating: 4,
      image: "https://tse2.mm.bing.net/th?id=OIP.KGuRfbrIg5SoY92BTuGb2gHaHa&pid=Api&P=0&h=180"
    },
    {
      name: "Oberoi Udaivilas",
      location: "Udaipur",
      price: 12000,
      rating: 5,
      image: "https://tse4.mm.bing.net/th?id=OIP.inOZ6L56M_2hJfCMatItSwHaE8&pid=Api&P=0&h=180"
    },
    {
      name: "ITC Grand Chola",
      location: "Chennai",
      price: 9000,
      rating: 4,
      image: "https://tse4.mm.bing.net/th?id=OIP.YsDIJG5M4KTFRJcuhbEJtQHaE8&pid=Api&P=0&h=180"
    },
    {
      name: "The Lalit",
      location: "Delhi",
      price: 7000,
      rating: 4,
      image: "https://tse3.mm.bing.net/th?id=OIP.ypchbVBzDQlRE3WrhEvJwAHaE7&pid=Api&P=0&h=180"
    }
  ]);

  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookings, setBookings] = useState([]);

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar query={searchQuery} setQuery={setSearchQuery} />
              <HotelList hotels={filteredHotels} onBook={setSelectedHotel} />
              {selectedHotel && (
                <BookingForm
                  selectedHotel={selectedHotel}
                  onClose={() => setSelectedHotel(null)}
                  onBook={(data) =>
                    setBookings([
                      ...bookings,
                      { ...data, roomNumber: Math.floor(Math.random() * 900) + 100 }
                    ])
                  }
                />
              )}
            </>
          }
        />
        <Route path="/bookings" element={<MyBookings bookings={bookings} />} />
      </Routes>
    </Router>
  );
}

export default App;
