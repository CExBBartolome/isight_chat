"use strict";
var io, assert = require('assert');

module.exports = function server(port){
	assert(port);
	
	port = parseInt(port);
	assert(!isNaN(port));

	io = require('socket.io')(port);	
}
