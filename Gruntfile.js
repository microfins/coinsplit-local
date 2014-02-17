module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngtemplates:  {
      myApp:        {
        cwd:      'app',
        src:      'partials/**.html',
        dest:     '_public/templates.js'
      }
    },
    nodewebkit: {
      options: {
        // version: "0.9.1",
        build_dir: '../dist',
        // specifiy what to build
        mac: false,
        win: false,
        // linux32: true,
        linux64: true,
        keep_nw: true
      },
      src: [
        './**/*'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['ngtemplates']);
};