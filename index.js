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
const sample2Router = require('./routes/sample2');
app.use('/sample', sampleRouter);
app.use('/sample2', sample2Router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
