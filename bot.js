var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var fs = require('fs');
var messages = fs.readFileSync('quotes.txt').toString().split("\r\n\r\n");
for(i in messages) {
    console.log(messages[i]);
}

var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

writeTweet()

setInterval(writeTweet, 30000); 