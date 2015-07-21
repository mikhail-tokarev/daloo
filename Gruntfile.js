module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: 'src/less/*.less',
            tasks: 'less'
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'www'
                }
            }
        },
        less: {
            dist: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    'www/css/main.css': 'src/less/main.less'
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['less', 'connect', 'open', 'watch']);
};
