var friendData = require('../data/friends.js');
module.exports = function (app) {
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	})
	app.post('/api/friends', function(req, res){
		var newFriend = req.body;
        var totalScore = 40;
        var currentTotalScore = 0;
        var bestFriendIndex = 1;
        for(j=0; j< friendData.length; j++){
            for(i=0; i<10; i++){
                currentTotalScore += Math.abs((parseInt(friendData[j].scores[i]) - parseInt(newFriend.scores[i])));
            }
            if(currentTotalScore < totalScore){
                totalScore = currentTotalScore;
                bestFriendIndex = j;
                console.log("inside if"+ bestFriendIndex);
            }
            currentTotalScore = 0;
        }
        friendData.push(newFriend);
		res.json(friendData[bestFriendIndex]);
	})
}