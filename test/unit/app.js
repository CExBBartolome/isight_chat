"use strict";
var mocha = require('mocha');
var assert = require('assert');
var seneca = require('seneca')();

// test created microservice is able to receive messages
suite("app.js",function(){
	test("it should successfully use app.js in seneca",function(){
		var pattern = {cmd:"chat"};
		var opts = {pattern:pattern,port:1338};

		seneca.use('../../app.js',opts);
	});
	test("it should send a message to the @anonymous room",function(){
		var msg = {cmd:"chat",msg:{from:"Anonymous",msg:"Message for @anonymous"}};
		seneca.act(msg);
	});
});
