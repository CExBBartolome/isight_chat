"use strict";
var assert = require('assert');

module.exports = function server(port){
	assert(port);
	
	port = parseInt(port);
	assert(!isNaN(port));

	var server = require('socket.io')(port);

	server.on('connection',function(socket){
		socket.emit('status','ok');
		socket.on('login',function(username){
			// TODO: validate username and authenticate session
			socket.join(username);
		});
	});

	return server;
}
