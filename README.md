# FriendFinder
Technologies used:
1. node js
2. HTML
3. express

This app will take a survey of 10 questions and will match the best friend for the user based on the answers opted by the user. It will take the difference between the answer selected by the user and the people already in the database for each question and add the differences and select the lowest difference and displace the name and picture of the friend for the user.

The directory for this assignment is as follows:
```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```
main logic for calculating the score for user with the existing people in the database.

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

[!gif]()
[!gif]()



