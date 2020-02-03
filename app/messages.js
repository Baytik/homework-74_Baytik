const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readdir('./allMessages', (err, files) => {

    });
});

router.post('/', (req, res) => {
    const date = new Date();
    const messageDate = date.toISOString();
    const message = {
        message: req.body.message,
        datetime: messageDate
    };
    const fileName = `./allMessages/${messageDate}.txt`;
    const data = JSON.stringify(message, null, 2);
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('File was saved!')
        }
    });
    res.send(message);
});

module.exports = router;