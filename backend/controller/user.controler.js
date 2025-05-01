const User = require("../model/user.model");



const getUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json({message:"user fetched sucessfully"})
    } catch (error) {
        res.status(200).json({message:error.message})
    }
}

const updateUser = async (req,res)=>{
     try {
            const {id} = req.params;
            const user = await User.findByIdAndUpdate(id,req.body);
            res.status(200).json({message:"user fetched sucessfully"})
        } catch (error) {
            res.status(200).json({message:error.message})
        }
}

module.exports = {getUser,updateUser}