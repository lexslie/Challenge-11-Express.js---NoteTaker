const fs = require("fs");
const path = require("path");

function createNetwork(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/dbjson"),
        JSON.stringify({
            notesArray
        }, null, 2)
    )
    return note;
}

module.exports = {
    createNetwork
};