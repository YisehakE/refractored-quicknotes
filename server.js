const express = require("express")

const path = require("path");
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
    res.sendFilne(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);
console.log(`Express is listening on ${PORT}`)


