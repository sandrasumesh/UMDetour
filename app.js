require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const constructionRoutes = require('./routes/constructionRoutes');
app.use('/', constructionRoutes);

const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);

const newRoutes = require('./routes/new');
app.use('/new', newRoutes);

const mapRoutes = require('./routes/mapRoutes');
app.use('/', mapRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

