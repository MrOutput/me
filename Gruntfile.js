module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      files: {
        src: 'index.jade',
        dest: 'index.html'
      }
    },
    less: {
      files: {
        src: 'css/layout.less',
        dest: 'css/layout.css'
      }
    },
    watch: {
      jade: {
        files: 'index.jade',
        tasks: 'jade',
        options: {
          event: 'changed'
        }
      },
      less: {
        files: 'css/layout.less',
        tasks: 'less',
        options: {
          event: 'changed'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jade', 'less']);

};
