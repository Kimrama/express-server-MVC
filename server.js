const express = require("express");
const path = require("path");

const friendRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
    console.log("server listening to port", PORT);
});
