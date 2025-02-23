const express = require("express");
const {
  getUserProfileById,
  getUserProfiles,
  patchUserProfilesById,
} = require("../controllers/userProfilesController");
const userProfilesRouter = express.Router();

//GET get userprofiles by id / api/userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);

//GET get user profiles /api/userProfiles
userProfilesRouter.get("/", getUserProfiles);

//PATCH update user profile by id /api/userProfiles/:userId
userProfilesRouter.patch("/:userId", patchUserProfilesById);

module.exports = userProfilesRouter;
