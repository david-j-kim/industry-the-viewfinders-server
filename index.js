const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Routes
const sampleRouter = require('./routes/sample');
app.use('/sample', sampleRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
