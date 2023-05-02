const path = require("path");

const { v4: uuidv4 } = require("uuid");

function generateImageFilename(originalName) {
    const ext = path.extname(originalName) || "png";
    return `${uuidv4()}.${ext}`;
}

module.exports = { generateImageFilename };
