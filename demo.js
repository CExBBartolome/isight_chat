#!/usr/bin/env node
"use strict";

var seneca = require('seneca')(),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var pattern = {cmd:"chat"};
var opts = {pattern:pattern,port:1337}
seneca.use("app.js",opts);

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); // needed to parse body

app.put("/chat",function(req,res,next){
	// does not consider csrf or xss
	// does not consider ddos
	pattern.msg = req.body;
	seneca.act(pattern,function(err,out){
		//res.send(JSON.stringify(out));
		//res.end();
	});
	res.send(JSON.stringify({status:'ok'}));
	next();
});

app.listen(8080);
