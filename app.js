const express = require('express');
const app = express();
const path = require ('path');
require('dotenv').config();

app.use(express.static('public'));
app.use('/style.css', express.static(__dirname + 'public/style.css'));
app.use('images', express.static(__dirname + 'public/images'));

app.get('', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.listen(3000, function(){
    console.log('Server is up at port 3000');
});