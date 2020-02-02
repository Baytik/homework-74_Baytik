const fs = require('fs');

const fileName = './allMessages/messages.txt';

const date = new Date();
const messageDate = date.toISOString();
const messages = [{
   message: 'Something was!',
   datetime: messageDate
}];
const data = JSON.stringify(messages, null, 2);

fs.appendFile(fileName, data, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('File was saved!')
    }
});