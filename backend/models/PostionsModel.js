const {model}=require("mongoose");
const {PostionsSchema}=require("../Schemas/PostionsSchema");

const PostionsModel=new model("postion", PostionsSchema);

module.exports={PostionsModel};