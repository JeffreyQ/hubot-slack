module.exports = function(robot) {
    var reply = "Technically speaking, Github. But buffed up by Sota Robotics."
    robot.respond(/who's your daddy/i, function(msg){
        msg.reply(reply)
    });
    robot.respond(/who is your daddy/i, function(msg){
        msg.reply(reply)
    });
    robot.respond(/whose your daddy/i, function(msg){
        msg.reply(reply)
    });
}
