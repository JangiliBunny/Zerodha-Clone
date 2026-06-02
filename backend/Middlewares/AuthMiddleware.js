const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports.userVerification = (req, res) => {
  console.log("Cookies received:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    console.log("NO TOKEN FOUND");
    return res.json({ status: false });
  }

  console.log("TOKEN FOUND");

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("JWT ERROR:", err.message);
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);

    if (user) {
      return res.json({
        status: true,
        user: user.username,
      });
    }

    return res.json({ status: false });
  });
};

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }