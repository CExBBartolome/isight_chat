"use strict";
var assert = require('assert');
var _ = require('lodash');

module.exports = function(opts){
	var server = require('./lib/server.js')(opts.port);
	this.add(opts.pattern,function(args,cb){
		// args is of the format {*pattern*,msg:}
		// parse args.msg to identify which rooms to emit to
		var pattern = /(\[?@|#)[^\W]*(\])?/g;
		var channels = args.msg.msg.match(pattern);

		console.log("Trying to send message "+args.msg.from+" "+args.msg.msg);
		_.forEach(channels,function(channel){

			server.in(channel).emit("msg",args.msg);
			console.log("Emitting to |"+channel+"|");
		});

		// server.in("@cexbbartolome").emit('msg',args.msg);
		// possible errors:
		// - no targets to connect to
		cb(null,{status:"ok"});
	});
}
