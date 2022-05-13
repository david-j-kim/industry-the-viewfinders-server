const express = require("express");
const router = express.Router();
// const { readData, writeData, sampleData, sample2Data } = require('../util/readAndWrite');
const sstk = require("shutterstock-api");

// sample data
router.get("/", (_req, res) => {
    
        sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

        const imagesApi = new sstk.ImagesApi();

        const queryParams = {
        "query": "flowers",
        "image_type": "photo",
        "orientation": "vertical"
        // "people_number": 3
        };

        imagesApi.searchImages(queryParams)
        .then((data) => {
            res.status(200).json(data);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    
});

module.exports = router;