const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

router.get('/getMessage', messageController.getmessage);

router.post('/addMessage', messageController.postmessage);

router.post('/sendresponse', messageController.postresponse);

router.post('/messageDate', messageController.MessageDate);


module.exports = router; 