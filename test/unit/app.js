"use strict";
var mocha = require('mocha');
var assert = require('assert');
var app;

suite("app.js",function(){
	test("#server() is not undefined",function(){
		app = require('../../app.js');
		// console.log("typeof:"+(typeof app.server));
		assert.notEqual(typeof app.server,'undefined');
	});
	suite("#server()",function(){
		test("it should throw an exception if no port was provided", function(){
			assert.throws(function(){
				app.server();
			});
		})
	});
	suite("#server({invalid})",function(){
		test("it should throw an exception if port is invalid", function(){
			assert.throws(function(){
				app.server('string');
			})
		});
	});
});
