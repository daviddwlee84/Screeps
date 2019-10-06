// Remove "Example" prefix and modify the personal content
module.exports = function (grunt) {

    // Load task dependencies
    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define tasks
    grunt.initConfig({
        // The "screeps" task that will upload codes
        screeps: {
            options: {
                email: '<your e-mail>',
                password: '<your password>',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['src/*.js']
            }
        },
        // The "watch" task which will listen the modification
        watch: {
            files: "src/*.*",
            tasks: ["screeps"]
        }
    });

    // Set the default task
    grunt.registerTask("default", ["watch"])
}