"use strict";
var mocha = require('mocha');
var assert = require('assert');
var app = require("../../app.js");

suite("app.js",function(){
	test("#server()",function(){
		test("it should throw an exception if no parameters are provided",
			assert.throws(function(){
				app.server();
			})
		);
	});
});
