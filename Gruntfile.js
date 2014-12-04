/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
	nodemon: {
	      dev: {
	      	      script: 'demo.js'
	      }
	    },
	concurrent: {
	      demo: ['nodemon','open:demo']
	},
	open: {
	      platoReport: {
		      path: './plato/index.html',
		      app: 'Google Chrome'
		    },
	      demo: {
		      path: 'http://localhost:8080/index.html',
		      app: 'Google Chrome'
	      }
	    },
        plato: {
	      src: {
	              options : {
		                jshint : grunt.file.readJSON('.jshintrc')
		              },
	              files: {
		                'plato': ['app.js','lib/**/*.js','test/**/*.js']
		              }
	            }
	    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  // Default task.
  grunt.registerTask('default', []);
  grunt.registerTask('analysis', ['plato:src', 'open:platoReport']);
  grunt.registerTask('demo',['concurrent:demo']);
};
