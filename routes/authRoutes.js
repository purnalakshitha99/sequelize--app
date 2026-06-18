const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile
} = require("../controllers/authController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);


// router.get(
//   "/profile",
//   authMiddleware,
//   (req, res) => {
//     res.json({
//       user: req.user,
//     });
//   }
// );


router.get("/profile/:id", authMiddleware, getProfile);
router.post("/register", register);
router.post("/login", login);

module.exports = router;