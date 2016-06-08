module.exports	=	function(grunt){
	//configure main prject settings
	grunt.initConfig({
		/// basic settings and info about plugins
		pkg: grunt.file.readJSON('package.json'),

		//name of plugin("with out the grunt keyword")

		cssmin:{
			combine:{
				files:{
					'public/stylesheets/stylecombine.css':['public/stylesheets/bootstrap.min.css','public/stylesheets/font-awesome.min.css','public/stylesheets/styles.css']
				}
			}
		},

	}); 

	//load the plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//task
	grunt.registerTask('default',['cssmin']);
	//grunt.registerTask('default',['uglify']);
};
