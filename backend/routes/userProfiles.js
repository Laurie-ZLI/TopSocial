const express = require("express");
const { getUserProfileById } = require("../controllers/userProfilesController");
const userProfilesRouter = express.Router();

//GET get userprofiles by id / api/userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);
module.exports = userProfilesRouter;
