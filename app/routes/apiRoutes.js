var friendsData = require("../data/friends");
var fs = require("fs");

module.exports = function(app){

  app.get("/api/friends", function(req,res){
      res.json(friendsData);
  });



  // Post data to the friends.js


  app.post("/api/friends",function(req, res){
      newFriend = req.body
      var lowestDiff =0;
      var previousLowestDiff =55;
      var response;
      // Iterate through data to determine the closest match for the friend.
      for(i=0;i < friendsData.length;i++){
          for(j=0; j <newFriend.scores.length;j++){
            console.log(parseInt(friendsData[i].scores[j]), parseInt(newFriend.scores[j]));
            lowestDiff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriend.scores[j])); 
          }
          if( lowestDiff < previousLowestDiff) {
              previousLowestDiff =lowestDiff;
              lowestDiff=0;
              // console.log(previousLowestDiff);
              // console.log(friendsData[i].name)
              response = friendsData[i];
          }
     }
     // Push the Survey to the friends.js array
     friendsData.push(newFriend);
     // return the response with the closest matching friend.
     return res.json(response);
  })

}