// Create the configuration
var config = {
    channels: ["#ruhack"],
    server: "irc.freenode.net",
    botName: "TPP"
};

var irc = require("irc");

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener("message", function(from, to, text, message) {
    console.log(text);
});
