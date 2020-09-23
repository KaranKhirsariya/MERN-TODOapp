const config = require('./config/index')
const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes');

const app = express();
const PORT = config.port;
const MONGODB_URI = config.databaseURL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(config.api.prefix, router);

mongoose.connect(MONGODB_URI, { 
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useUnifiedTopology: true 
});
mongoose.connection.once('open', function () {
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function (error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});