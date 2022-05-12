const fs = require('fs');

const sampleData = "./data/sample.json";
const sample2Data = "./data/sample2.json";

//global read and write functions
const readData = (path) => {
    return JSON.parse(fs.readFileSync(path));
}

const writeData = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = {
    readData,
    writeData,
    sampleData,
    sample2Data
}