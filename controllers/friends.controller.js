const FriendsModel = require("../models/friends.model");

function getFriendByID(req, res) {
    const friend = FriendsModel[req.params.friendID];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(400).send("NOT FOUND");
    }
}

function getAllFriend(req, res) {
    res.json(FriendsModel);
}

function addFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Mission friend name",
        });
    }
    const newFriend = {
        name: req.body.name,
        id: FriendsModel.length,
    };
    FriendsModel.push(newFriend);

    res.json(newFriend);
}

module.exports = {
    getFriendByID,
    getAllFriend,
    addFriend,
};
