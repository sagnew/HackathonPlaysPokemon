var irc = require("irc");
var keyboard = require('./win_keyboard');

var buttons = {
    "up": "w",
    "down": "s",
    "left": "a",
    "right": "d",
    "a": "z",
    "b": "x",
    "start": "c"
};

var pressButton = function(button){
    var keyCode = keyboard.getKeyCode(buttons[button]);
    keyboard.type(keyCode);
    console.log(button);
};

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

console.log("Fuck");
