const express = require("express");
const {
  getUserPosts,
  getUserPostById,
  addUserPost,
  updateUserPostById,
  deleteUserPostById,
} = require("../controllers/userPostsController");
const userProfilesRouter = require("./userProfiles");
const userPostsRouter = express.Router();

//GET get all user posts /api/userPosts
userPostsRouter.get("/", getUserPosts);

//GET get user posts by id /api/userPosts/:userId
userPostsRouter.get("/:post_id", getUserPostById);

//POST post a user post /api/userPosts
userPostsRouter.post("/", addUserPost);

//PUT update a user post by id /api/userPosts/:post_id
userPostsRouter.put("/:post_id", updateUserPostById);

//DELETE delete a user post by id /api/userPosts/:post_id
userPostsRouter.delete("/:post_id", deleteUserPostById);

module.exports = userPostsRouter;
