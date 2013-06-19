module.exports = (grunt) ->
  grunt.initConfig
    clean: 
      coverage: ['lib-cov']
    copy:
      coverage:
        src: ['lib/test/**']
        dest: 'lib-cov/'
    blanket:
      coverage:
        src: ['lib/src/']
        dest: 'lib-cov/lib/src'
    mochaTest:
      test:
        options: 
          reporter: 'spec'
          require: 'globals'
        src: ['lib-cov/lib/test/**/*.js']
      report:
        options: 
          reporter: 'html-cov'
          quiet: true
        src: ['lib-cov/lib/test/**/*.js']
        dest: 'coverage.html'
      coverage:
        options:
          reporter: 'travis-cov'
        src: ['lib-cov/lib/test/**/*.js']

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-blanket'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-mocha-test'

  grunt.registerTask 'coverage', [
    'clean:coverage'
    'copy:coverage'
    'blanket:coverage'
  ]

  grunt.registerTask 'default', [
    'coverage'
    'mochaTest'
  ]