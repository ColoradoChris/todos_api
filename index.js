const express = require('express'),
      app = express(),
      port = process.env.PORT;

app.get('/', function(req, res){
   res.send("Hello from the root!"); 
});

app.listen(port, function(){
   console.log("APP IS RUNNING ON PORT " + port); 
});