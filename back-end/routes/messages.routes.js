const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

router.get('/getMessage', messageController.getmessage);

router.post('/addMessage', messageController.postmessage);

router.post('/sendresponse/:id', messageController.postresponse);

router.post('/searchMessage', messageController.searchMessage);

router.get('/userInfos/:id', messageController.getInfos )


module.exports = router; 