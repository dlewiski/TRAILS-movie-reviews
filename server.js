const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const movies = require('./routes/movies');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Enable cors
app.use(cors());

// Setup for deployment
app.use(express.static(path.join(__dirname, "client", "build")))

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB atlas
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("App route working!"));

// Use movie routes
app.use('/movies', movies);

// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
