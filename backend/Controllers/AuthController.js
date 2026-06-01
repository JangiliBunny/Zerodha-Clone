const User=require("../models/UserModel");
const {createSecretToken}=require("../util/SecretToken");
const bcrypt=require("bcrypt");


module.exports.SignUp = async (req, res, next) => {
  try {

    console.log(req.body);

    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
   
    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password,
    });
    console.log("BODY:", req.body);
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });

  } catch (error) {
    console.log(error);
  }
};
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    console.log("Entered Password:", password);
console.log("Stored Password:", user.password);

// const auth = await bcrypt.compare(password, user.password);

console.log("Auth Result:", auth);
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     
  } catch (error) {
    console.error(error);
  }
}