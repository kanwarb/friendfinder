var friendsData = require("../data/friends");

module.exports = function(app){

  app.get("/api/friends", function(req,res){
      res.json(friendsData);
  });

  app.post("/api/friends",function(req, res){
      newFriend = req.body
      var lowestDiff =0;
      var previousLowestDiff =55;
      var response;
      for(i=0;i < friendsData.length;i++){
          for(j=0; j <newFriend.scores.length;j++){
            console.log(parseInt(friendsData[i].scores[j]), parseInt(newFriend.scores[j]));
            lowestDiff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriend.scores[j])); 
          }
          if( lowestDiff < previousLowestDiff) {
              previousLowestDiff =lowestDiff;
              lowestDiff=0;
              console.log(previousLowestDiff);
              console.log(friendsData[i].name)
              response = friendsData[i];
          }
     }
     friendsData.push(newFriend);
     return res.json(response);
  })

}