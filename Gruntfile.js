module.exports = function(grunt){
	// Grunt config
	grunt.initConfig({
		less: {
			app: {
				files: {"css/main.css": "less/main.less"}
			}
		},
		watch: {
			styles: {
				files: ["less/**/*.less"],
				tasks: ["less:app"],
				options: {spawn: false, livereload: true}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
}