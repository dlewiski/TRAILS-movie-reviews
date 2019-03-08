const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movies = require('./routes/movies');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB atlas
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("App route working!"));

// Use movie routes
app.use('/movies', movies);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
