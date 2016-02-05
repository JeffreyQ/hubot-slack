module.exports = function(robot) {
	var reply = "I'm your daddy!";

	robot.respond(/who's my daddy/i, function(msg){
		msg.reply(reply);
	});
	
	robot.respond(/whose my daddy/i, function(msg){
		msg.reply(reply);
	});

	robot.respond(/who is my daddy/i, function(msg){
		msg.reply(reply);
	});
}



