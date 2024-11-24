const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
    console.log("ip address: ", req.ip);
    next();
});

friendRouter.post("/", friendsController.addFriend);
friendRouter.get("/", friendsController.getAllFriend);
friendRouter.get("/:friendID", friendsController.getFriendByID);

module.exports = friendRouter;
