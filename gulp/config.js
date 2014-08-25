/**
 * Gulp configuration file
 */
var config = {};

/**
 * Define build src and dist paths
 */
config.paths = {
  src: {
    root: './src',
    common: './src/common',
    modules: './src/modules',
    bower: './bower_components',
    data: './src/data'
  },

  dist: {
    root: './dist',
    css: './dist/css',
    js: './dist/js',
    templates: './dist/templates',
    vendor: './dist/js/vendor'
  }
};

/**
 * Configure webserver
 */
config.webserver = {
  port: 8900,
  livereloadPort: 35740
};

/**
 * Define replacement patterns
 */
config.replacements = [
  {
    pattern: /\$\{common_src\}/g,
    replacement: config.paths.src.common
  },
  {
    pattern: /\$\{modules_src\}/g,
    replacement: config.paths.src.modules
  },
  {
    pattern: /\$\{bower_src\}/g,
    replacement: config.paths.src.bower
  }
];

/**
 *
 */
config.inject = [
    config.paths.dist.vendor + '/angular.min.js',
    config.paths.dist.vendor + '/angular-animate.min.js',
    config.paths.dist.vendor + '/angular-route.min.js',
    config.paths.dist.vendor + '/markdown.js'
];

module.exports = config;