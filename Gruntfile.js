'use strict';

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

var webpackDistConfig = require('./webpack.dist.config.js'),
    webpackDevConfig  = require('./webpack.config.js');

module.exports = function (grunt) {
    // Let *load-grunt-tasks* require everything
    require('load-grunt-tasks')(grunt);

    // Read configuration from package.json
    var pkgConfig = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkgConfig,

        webpack: {
            options: webpackDevConfig,

            dist: {
                cache  : false,
                //plugins: webpackDistConfig.plugins,
                devtool: true,
                stats  : {
                    colors : true,
                    reasons: true
                }
            },
            dev : {
                devtool: true,
                debug  : true,

                stats  : {
                    colors : true,
                    reasons: true
                }
            }

        },
        watch  : {
            allFiles: {
                files: ['<%= pkg.src %>/styles/{,*/}*.scss', '<%= pkg.src %>/scripts/{,*/}*.js'],
                tasks: ['buildDev']
            }
        },
        jshint : {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
                // ignores: ['<%= pkg.src %>/scripts/vendor/gmail.js']
            },
            all    : [
                'Gruntfile.js',
                '<%= pkg.src %>/scripts/{,*/}*.js',
                '!<%= pkg.src %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        copy: {
            dist: {
                files: [
                    // includes files within path
                    {
                        flatten: true,
                        expand : true,
                        src    : ['<%= pkg.src %>/*'],
                        dest   : '<%= pkg.dist %>/',
                        filter : 'isFile'
                    },
                    {
                        flatten: true,
                        expand : true,
                        src    : ['<%= pkg.src %>/_locales/en/*'],
                        dest   : '<%= pkg.dist %>/_locales/en',
                        filter : 'isFile'
                    },
                    {
                        flatten: true,
                        expand : true,
                        src    : [
                            '<%= pkg.src %>/images/ins16.png',
                            '<%= pkg.src %>/images/ins128.png'
                        ],
                        dest   : '<%= pkg.dist %>/images/'
                    },
                    {
                        flatten: true,
                        expand : true,
                        src    : [
                            '<%= pkg.src %>/scripts/contentscript.js'
                        ],
                        dest   : '<%= pkg.dist %>/assets'
                    },
                ]
            }
        },

        clean         : {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= pkg.dist %>'
                    ]
                }]
            }
        },

        // Auto buildnumber
        chromeManifest: {
            dist: {
                options: {
                    buildnumber: true,
                    overwrite  : {"web_accessible_resources": ["assets/main.js"]}
                },
                src    : '<%= pkg.src %>',
                dest   : '<%= pkg.dist %>'
            }
        },

        // Compres dist files to package
        compress      : {
            dist: {
                options: {
                    archive: function () {
                        var manifest = grunt.file.readJSON('src/manifest.json');
                        return 'package/insightful-extension-' + manifest.version + '.zip';
                    }
                },
                files  : [{
                    expand: true,
                    cwd   : 'dist/',
                    src   : ['**'],
                    dest  : ''
                }]
            }
        }

    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:dist', 'connect:dist']);
        }

        grunt.task.run([
            'open:dev',
            'webpack-dev-server'
        ]);
    });

    grunt.registerTask('test', ['karma']);

    grunt.registerTask('build', ['clean', 'copy', 'webpack:dist', 'chromeManifest:dist', 'compress']);

    grunt.registerTask('buildDev', ['clean', 'copy', 'webpack:dev']);

    grunt.registerTask('default', ['build']);
};
