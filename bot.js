var irc = require("irc");

var pressButton = function(button){
    console.log(button);
};

var buttons = ["up", "down", "left", "right", "a", "b", "start"];

var config = {
    channels: ["#ruhack"],
    server: "irc.freenode.net",
    botName: "Pokemon"
};

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener("message", function(from, to, text, message) {
    if(buttons.indexOf(text) > -1){
        //press the button
        pressButton(text);
    }
});
