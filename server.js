const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 5000;
const messageRouter = require('./routes/messages.routes')


mongoose.connect(process.env.URL_MONGOO, 
    {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Datatbase Connected')
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api', messageRouter);



//server 
app.listen(PORT, (err) => {
    if(err){
        return console.log('ERROR',err);
    }
    console.log(`listing on port ${PORT}`)
});

module.exports = app;