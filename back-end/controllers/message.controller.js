const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// get all messages
exports.getmessage = async (req, res) =>{
    // res.send({message : "it's work"})
    try {
        const allMessage = await Message.find();

        res.status(200).json(allMessage);
    } catch (error) {
        res.status(400).json({message : error.message})  
    }
};

// send message 
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

//send Response
let transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
   user: process.env.EMAIL,
   pass: process.env.PASSWORD
 }
});

exports.postresponse = async (req, res) => {
   const {response} = req.body;
   const { id } = req.params;

   const currentUser = await Message.findOne({_id : id})
   if(currentUser){

     let mailOptions = {
       from: 'zinan.nahoul@gmail.com',
       to: currentUser.email,
       subject: 'Sending Email using Node.js',
       text: response
     };
     
     transporter.sendMail(mailOptions, function(error, info){
       if (error) {
         console.log(error);
       } else {
         console.log('Email sent: ' + info.response);
       }
     });
   }

  
};

// search Message
exports.searchMessage = async (req, res) => {

  const {email , date} = req.body

  if(email && date) {
    const allMessage = await Message.find({email:email, date:date})
    if(allMessage) return res.status(201).json(allMessage)
  } 
  else if (email){
    const allMessage = await Message.find({email:email})
    if(allMessage) return res.status(201).json(allMessage)
  }
  else if(date){
    const allMessage = await Message.find({date:date})
    if(allMessage) return res.status(201).json(allMessage)
  }

  // Message.aggregate([
  //   {
  //     $addFields: {
  //       "dateString": { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
  //     }
  //   },
  //   {
  //     $match: {
  //       dateString: {
  //         $eq: req.body.dateValue
  //       }
  //     }
  //   }
  // ]).exec((err, records) => {
  //   if (err) throw err;
  //   // console.log(records);
  //   res.json(records)
  // })

};

// get infos user
exports.getInfos = async (req, res) => {
  const {id} = req.params;

  try {
    const allInfos = await Message.findOne({_id : id})
    res.status(201).json(allInfos)
  } catch (error) {
    res.status(500).send(error)
  }
}