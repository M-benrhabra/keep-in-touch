const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validator/user.validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {

    //validate data
    //res.send(registerValidation(req.body));
    const {error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message)   
    }

    //check the user if existe
    const existUser = await User.findOne({email : req.body.email});
    if (existUser ) {
        return res.status(400).send({message : "The Email Alredy exist"})
    }

    // hash password 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // save user 
    const user = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : hashPassword
    });
    const saveUser = await user.save();
    try {
        res.status(200).send({message : 'You are Saved'})
    } catch (error) {
        res.status(500).send(error)
    }
};

exports.loginUser = async (req, res) => {
     //validation the data
     
     const {error} = loginValidation(req.body); 
     if (error) {
         return res.status(400).send(error.details[0].message);        
     };
 
     //check the user if not exist 
     const user = await User.findOne({email : req.body.email});
     if (!user) {
         return res.status(400).send({message : "Invalid Email"})
     }
 
     //compare password
     const passIsCorrect = await bcrypt.compare(req.body.password, user.password);
     if (!passIsCorrect) {
         return res.status(400).send({message : "Invalid Password"})
     }

     // create and assign a token 
    const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET);
    res.header('key-token', token).send(token)


    res.status(200).send({message : "Loged In"})
    

}