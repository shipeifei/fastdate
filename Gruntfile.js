'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        traceur: {
            options: {
                modules: "amd"
            },
            custom: {
                files: [{
                    expand: true,
                    cwd: 'modules',
                    src: ['*.js'],
                    dest: 'es5Modules'
                }]
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-traceur');


    // Default task.
    // grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);
    grunt.registerTask('default', ['traceur']);

};