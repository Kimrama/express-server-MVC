const path = require("path");

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "images", "kimrama.jpg"));
}

function postMessages(req, res) {
    console.log("updating messages...");
}

module.exports = {
    getMessages,
    postMessages,
};