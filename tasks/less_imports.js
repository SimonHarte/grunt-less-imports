/*
 * grunt-less-imports
 * https://github.com/MarcDiethelm/grunt-less-imports
 *
 * Copyright (c) 2013 Marc Diethelm
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var util = require('util');

module.exports = function(grunt) {
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('less_imports', 'A grunt task to create @import statements from a collection of stylesheet files.', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
				inlineCSS: true,
				banner: '// This file was generated by grunt-less-imports',
				import: 'once'
			}),
			banner = options.banner + '\n\n';

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {

			var css = '',
				lessImports = '',
				dest = f.dest,
				relRoot = path.dirname(dest),
				resolved;

			// Process sources
			f.src.forEach(processSrc);

			// Write the destination file.
			grunt.file.write(dest, banner + css + lessImports);
			grunt.log.writeln('File "' + f.dest.cyan + '" created.');

			function processSrc(filepath) {
				var extension;
				// Warn on and ignore invalid source files (e.g. if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
				} else {
					extension = filepath.split('.').pop();
					if (options.inlineCSS === true && extension === 'css') {
						grunt.log.debug(filepath.green+ ' appending css'.magenta);
						css += grunt.file.read(filepath) + '\n\n';
					}
					else {
						resolved = path.relative(relRoot, filepath);
						grunt.log.debug(resolved.green + ' @import created'.magenta);
						lessImports += util.format('@import (%s) "%s";\n', options.import, resolved);
					}
				}
			}
		});
	});
};
