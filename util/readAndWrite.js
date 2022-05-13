const fs = require('fs');

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
}