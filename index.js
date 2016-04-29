var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get('/api/:date', function(req,res) {
	var newDate = isNaN(req.params.date) ? new Date(req.params.date) : new Date(Number(req.params.date));
	var naturalDate = months[newDate.getMonth()] + " " + newDate.getDate() + ", "  + newDate.getFullYear();
	var millisecs = newDate.getTime()/1000;
 	if (!isNaN(millisecs)) {
 		var response = JSON.stringify({unix: millisecs, natural: naturalDate});
 		res.send(response);
 	} else {
 		var response = JSON.stringify({unix: "null", natural: "null"});
 		res.send(response);
 	}
});

app.listen(3000, function() {
	console.log("Listening on port 3000");
});


