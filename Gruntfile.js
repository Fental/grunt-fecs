/*
 * fecs
 * https://github.com/Fental/grunt-fecs
 *
 * Copyright (c) 2015 fental
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    fecs: {
        check: {
          options: {
              rule: true,
              command: 'check',
              reporter: 'baidu'
          },
          files: {
              src: ['./test/input/*']
          }
        },
        format: {
          options: {
              command: 'format',
              output: './test/output'
          },
          files: {
               src: ['./test/input/*']
          }
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'fecs']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['fecs']);

};
