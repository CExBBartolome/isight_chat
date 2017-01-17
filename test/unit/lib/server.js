"use strict";
var mocha = require('mocha');
var assert = require('assert');
var seneca = require('seneca');

suite("lib/server.js",function(){
	test("it should throw an exception if no port was provided", function(){
		assert.throws(function(){
			require('../../../lib/server.js')();
		});
	});
	test("it should throw an exception if port is invalid", function(){
		assert.throws(function(){
			require('../../../lib/server.js')('string');
		});
	});
	
	test("is not undefined",function(){
		var server = require('../../../lib/server.js')(1337);
		var client = require('socket.io-client');
		assert.notEqual(typeof server,'undefined');
		console.log("type of:"+server);
		client.connect("http://localhost:1337");
		/*client.on("connect",function(){
			client.emit("login","@anonymous");
		});*/
	});
	// test if listening on port 1337
	// might need to use proxyquire
});
