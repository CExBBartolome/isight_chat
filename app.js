"use strict";
var assert = require('assert');

function isight_chat(){
	var self = {
		server:require('./lib/server.js')
	};
	
	return self;
}

module.exports = isight_chat();
