const Message = require('../models/Message');
const nodemailer = require('nodemailer');

exports.getmessage = async (req, res) =>{
    // res.send({message : "it's work"})
    try {
        const allMessage = await Message.find();

        res.status(200).json(allMessage);
    } catch (error) {
        res.status(400).json({message : error.message})  
    }
};

exports.postmessage = async (req, res) => {
    // save message in database 
    const message = new Message({
    ...req.body
});
const savemessage = await message.save();
try {
    res.status(200).send({message : 'message Save'})
} catch (error) {
    res.status(500).send(error)
}
};

exports.postresponse = async (req, res) => {
   const {email, response} = req.body
   

   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zinan.nahoul@gmail.com',
      pass: 'Mariam123+'
    }
  });
  
  var mailOptions = {
    from: 'zinan.nahoul@gmail.com',
    to: `${email}`,
    subject: 'Sending Email using Node.js',
    text: `${response}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}