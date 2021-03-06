'use strict';

var grunt = require('grunt');
var assert = require('assert');


describe('grunt-at-imports', function() {

	describe('Generation of less imports file', function() {

		it('should create a correct imports.less from src/dest configuration', function() {
			var actual = grunt.file.read('tmp/test_src_dest/imports.less');
			var expected = grunt.file.read('test/expected/default/imports.less');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.less from a files configuration', function() {
			var actual = grunt.file.read('tmp/test_files/imports.less');
			var expected = grunt.file.read('test/expected/default/imports.less');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.less from a files configuration with multiple entries', function() {
			var actual1 = grunt.file.read('tmp/test_more_files/deeper.less');
			var expected1 = grunt.file.read('test/expected/more_files/deeper.less');
			assert.equal(actual1, expected1);
			var actual2 = grunt.file.read('tmp/test_more_files/default.less');
			var expected2 = grunt.file.read('test/expected/more_files/default.less');
			assert.equal(actual2, expected2);
		});

		it('should create a correct imports.less with inlineCSS==false', function() {
			var actual = grunt.file.read('tmp/inline_css_false/imports.less');
			var expected = grunt.file.read('test/expected/inline_css_false/imports.less');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.less with a custom banner', function() {
			var actual = grunt.file.read('tmp/test_custom_banner/imports.less');
			var expected = grunt.file.read('test/expected/test_custom_banner/imports.less');
			assert.equal(actual, expected);
		});

		it('should set import keyword from options', function() {
			var actual = grunt.file.read('tmp/import_options/imports.less');
			var expected = grunt.file.read('test/expected/import_options/imports.less');
			assert.equal(actual, expected);
		});

		it('should set import keyword from options using callback', function() {
			var actual = grunt.file.read('tmp/import_options_callback/imports.less');
			var expected = grunt.file.read('test/expected/import_options_callback/imports.less');
			assert.equal(actual, expected);
		});

	});

	describe('Generation of scss imports file', function() {

		it('should create a correct imports.scss from src/dest configuration', function() {
			var actual = grunt.file.read('tmp/test_src_dest/imports.scss');
			var expected = grunt.file.read('test/expected/default/imports.scss');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.scss from a files configuration', function() {
			var actual = grunt.file.read('tmp/test_files/imports.scss');
			var expected = grunt.file.read('test/expected/default/imports.scss');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.scss from a files configuration with multiple entries', function() {
			var actual1 = grunt.file.read('tmp/test_more_files/deeper.scss');
			var expected1 = grunt.file.read('test/expected/more_files/deeper.scss');
			assert.equal(actual1, expected1);
			var actual2 = grunt.file.read('tmp/test_more_files/default.scss');
			var expected2 = grunt.file.read('test/expected/more_files/default.scss');
			assert.equal(actual2, expected2);
		});

		it('should create a correct imports.scss with inlineCSS==false', function() {
			var actual = grunt.file.read('tmp/inline_css_false/imports.scss');
			var expected = grunt.file.read('test/expected/inline_css_false/imports.scss');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.scss with a custom banner', function() {
			var actual = grunt.file.read('tmp/test_custom_banner/imports.scss');
			var expected = grunt.file.read('test/expected/test_custom_banner/imports.scss');
			assert.equal(actual, expected);
		});

	});

	describe('Generation of js imports file', function() {

		it('should create a correct imports.js from src/dest configuration', function() {
			var actual = grunt.file.read('tmp/test_src_dest/imports.js');
			var expected = grunt.file.read('test/expected/default/imports.js');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.js from a files configuration', function() {
			var actual = grunt.file.read('tmp/test_files/imports.js');
			var expected = grunt.file.read('test/expected/default/imports.js');
			assert.equal(actual, expected);
		});

		it('should create a correct imports.js with a custom banner', function() {
			var actual = grunt.file.read('tmp/test_custom_banner/imports.js');
			var expected = grunt.file.read('test/expected/test_custom_banner/imports.js');
			assert.equal(actual, expected);
		});

	});

});
