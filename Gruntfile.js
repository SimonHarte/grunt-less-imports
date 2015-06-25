/*
 * grunt-at-imports
 * https://github.com/SimonHarte/grunt-at-imports
 *
 * Copyright (c) 2013 Simon Harte
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Expose package.json on grunt config
		package: grunt.file.readJSON('package.json'),

		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js'
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
		at_imports: {
			test_src_dest_less: {
				options: {
				},
				src: [
					'test/fixtures/*.less',
					'test/fixtures/*.css',
					'test/fixtures/deeper/*.less',
					'test/fixtures/deeper/*.css'
				], // test using incorrect order, because we handle this
				dest: 'tmp/test_src_dest/imports.less'
			},
			test_src_dest_sass: {
				options: {
				},
				src: [
					'test/fixtures/*.scss',
					'test/fixtures/*.css',
					'test/fixtures/deeper/*.scss',
					'test/fixtures/deeper/*.css'
				], // test using incorrect order, because we handle this
				dest: 'tmp/test_src_dest/imports.scss'
			},
			test_src_dest_js: {
				options: {
				},
				src: [
					'test/fixtures/*.js'
				],
				dest: 'tmp/test_src_dest/imports.js'
			},
			test_files_less: {
				options: {
				},
				files: {
					'tmp/test_files/imports.less': [
						'test/fixtures/styles.less',
						'test/fixtures/styles.css',
						'test/fixtures/deeper/styles.less',
						'test/fixtures/deeper/styles.css'
					]
				}
			},
			test_files_sass: {
				options: {
				},
				files: {
					'tmp/test_files/imports.scss': [
						'test/fixtures/styles.scss',
						'test/fixtures/styles.css',
						'test/fixtures/deeper/styles.scss',
						'test/fixtures/deeper/styles.css'
					]
				}
			},
			test_files_js: {
				options: {
				},
				files: {
					'tmp/test_files/imports.js': [
						'test/fixtures/script.js'
					]
				}
			},
			test_more_files_less: {
				options: {
				},
				files: {
					'tmp/test_more_files/default.less': [
						'test/fixtures/styles.less',
						'test/fixtures/styles.css'
					],
					'tmp/test_more_files/deeper.less': [
						'test/fixtures/deeper/styles.less',
						'test/fixtures/deeper/styles.css'
					]
				}
			},
			test_more_files_sass: {
				options: {
				},
				files: {
					'tmp/test_more_files/default.scss': [
						'test/fixtures/styles.scss',
						'test/fixtures/styles.css'
					],
					'tmp/test_more_files/deeper.scss': [
						'test/fixtures/deeper/styles.scss',
						'test/fixtures/deeper/styles.css'
					]
				}
			},
			inline_css_false_less: {
				options: {
					inlineCSS: false
				},
				src: [
					'test/fixtures/*.less',
					'test/fixtures/*.css',
					'test/fixtures/deeper/*.less',
					'test/fixtures/deeper/*.css'
				],
				dest: 'tmp/inline_css_false/imports.less'
			},
			inline_css_false_sass: {
				options: {
					inlineCSS: false
				},
				src: [
					'test/fixtures/*.scss',
					'test/fixtures/*.css',
					'test/fixtures/deeper/*.scss',
					'test/fixtures/deeper/*.css'
				],
				dest: 'tmp/inline_css_false/imports.scss'
			},
			test_custom_banner_less: {
				options: {
					banner: '// Banner for <%= package.name %>'
				},
				src: [
					'test/fixtures/*.less',
					'test/fixtures/*.css'
				],
				dest: 'tmp/test_custom_banner/imports.less'
			},
			test_custom_banner_sass: {
				options: {
					banner: '// Banner for <%= package.name %>'
				},
				src: [
					'test/fixtures/*.scss',
					'test/fixtures/*.css'
				],
				dest: 'tmp/test_custom_banner/imports.scss'
			},
			test_custom_banner_js: {
				options: {
					banner: '// Banner for <%= package.name %>'
				},
				src: [
					'test/fixtures/*.js'
				],
				dest: 'tmp/test_custom_banner/imports.js'
			},
			import_option_less: {
				options: {
					import: 'reference'
				},
				src: [
					'test/fixtures/*.less',
					'test/fixtures/*.css'
				],
				dest: 'tmp/import_options/imports.less'
			},
			import_function_option: {
				options: {
					import: function(filepath, extension) {
						if (filepath === 'test/fixtures/styles.less') {
							return 'reference';
						} else {
							return 'once';
						}
					}
				},
				files: {
					'tmp/import_options_callback/imports.less': [
						'test/fixtures/styles.less',
						'test/fixtures/styles.css',
						'test/fixtures/deeper/*.less'
					]
				}
			}
		},

		// Unit tests.
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/*.test.js']
			}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mocha-test');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'at_imports', 'mochaTest']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
