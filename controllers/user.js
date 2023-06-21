const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true}
}, {timestamps: true})

const userColletion = mongoose.model('user', userSchema)

const getUsers = (req, res)=>{
    userColletion.find()
        .then((result)=>res.status(200).send({sucess: true, data: result}))
        .catch((error)=>res.status(500).send({success: false, message: error.message}));
}

const postUsers = (req, res)=>{

    if(Object.keys(req.body).length>=1){
        userColletion.create(req.body)
            .then((result)=>res.status(201).send({success: true, data: result}))
            .catch((error)=>res.status(400).send({success: false, message: error.message}))
    }else{
        res.status(400).send({success: false, message: "Please supply data"})
    }
}

const getUserById = (req, res)=>{
    userColletion.find({_id: req.params.id})
        .then((result)=>res.status(200).send({success: true, data: result}))
        .catch((error)=>res.send({success: false, message: error.message}))
}

const updateUserById = (req, res)=>{
    if(Object.keys(req.body).length>=1){
        userColletion.updateOne({_id: req.params.id},{$set: {...req.body}})
            .then((result)=>res.send({success: true, data: result}))
            .catch((error)=>res.send({success: false, message: error.message}))
    }else{
        res.status(400).send({success: false, message: "Please supply data"});
    }
}

const deleteUserById = (req, res)=>{
    userColletion.deleteOne({_id: req.params.id})
        .then((result)=>res.send({success: true, data: result}))
        .catch((error)=>res.send({success: false, message: error.message}))
}

module.exports = {getUsers, postUsers, getUserById, updateUserById, deleteUserById}