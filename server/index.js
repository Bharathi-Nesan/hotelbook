// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hotel-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Schema & Model
const bookingSchema = new mongoose.Schema({
  name: String,
  hotel: String,
  date: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// POST - Add Booking
app.post('/api/bookings', async (req, res) => {
  const newBooking = new Booking(req.body);
  await newBooking.save();
  res.json({ message: 'Booking successful' });
});

// GET - All Bookings
app.get('/api/bookings', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
