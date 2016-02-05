/*
Review regex and setup case insensitive and wildcard for keyword match replies.
 */

module.exports = function(robot) {
	var reply = "Just between you and me - his real name is Gustavo Greek."
	robot.respond(/what is roman's real name/i, function(msg){
		msg.reply(reply)
	});
	
	var reply2 = "He needs to work on getting'er'dun"
	robot.respond(/what does roman need to work on/i, function(msg){
		msg.reply(reply2)
	});	
	
	var reply3 = "I get'er dun"
	robot.respond(/what do you do/i, function(msg){
		msg.reply(reply3)
	});
}
