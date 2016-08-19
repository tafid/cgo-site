module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        contact: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/vue/dist/vue.js',
                    
                    'assets/js/*.js',
                ],
                dest: 'build/build.js',
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        concat_css: {
            options: {
            },
            all: {
                src: [
                    "assets/css/*.css",
                ],
                dest: "build/build.css"
            },
        },
    });
    
    // JS
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // CSS 
    grunt.loadNpmTasks('grunt-concat-css');
    
    // Images 
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', [
        'concat', 
        'uglify',
    ]);

};