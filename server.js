var express = require("express");


var app = express();

var PORT = process.env.PORT || 8000


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

var htmlRoutes = require("./app/routes/htmlRoutes");
var apiRoutes =  require("./app/routes/apiRoutes");

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function(){
    console.log("The server is listening on port " + PORT);
})