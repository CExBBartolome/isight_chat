"use strict";
var assert = require('assert');
var bunyan = require('bunyan'),
logger = bunyan.createLogger({name:"lib/server.js"});
module.exports = function server(port){
	assert(port);
	
	port = parseInt(port);
	assert(!isNaN(port));

	var server = require('socket.io')(port);

	server.on('connection',function(socket){
		socket.emit('status','ok');
		socket.on('login',function(username){
			// TODO: validate username and authenticate session
			logger.info(username+" just joined")
			socket.join(username);
		});
	});

	return server;
}
