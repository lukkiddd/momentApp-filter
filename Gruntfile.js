module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				options: {
					beautify: true
				},
				files: {
					'dist/<%= pkg.name %>.min.js': ['dist/momentApp.js']
				}
			}
		},
    jshint: {
      files: ['Gruntfile.js', 'dist/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				autoWatch: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify','jshint','karma']);

};