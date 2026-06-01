const { SignUp, Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const {userVerification}=require("../Middlewares/AuthMiddleware");

router.post("/signup", SignUp);
router.post("/login", Login);
router.post('/',userVerification)

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({
    success: true,
  });
});

module.exports = router;
