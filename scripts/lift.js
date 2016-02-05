module.exports = function(robot) {
    var reply = "Do *_you_* even lift?"
    robot.respond(/do you even lift/i, function(msg){
        msg.reply(reply)
    });

    var reply2 = "Do *_you_* lift?"
    robot.respond(/do you lift/i, function(msg){
        msg.reply(reply2)
    });

    var reply3 = "Over 9000!"
    robot.respond(/how much do you lift/i, function(msg){
        msg.reply(reply3)
    });
    robot.respond(/how much can you lift/i, function(msg){
        msg.reply(reply3)
    });
}
