const express = require("express")

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "build")));

app.length("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);
console.log(`Express is listening on ${PORT}`)


