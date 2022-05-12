const express = require("express");
const router = express.Router();
const { readData, writeData, sampleData, sample2Data } = require('../util/readAndWrite');

// sample2 data
router.get("/", (_req, res) => {
    res.status(200).send(readData(sample2Data));
});

module.exports = router;