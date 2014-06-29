module.exports = function (grunt) {

    grunt.config.init({
        xunit: {
            passing: {
                src: 'test/Fixtures/Passing/bin/Debug/Passing.dll',
                options: { xml: 'passing.xml' }
            },
            failing: {
                src: 'test/Fixtures/Failing/bin/Debug/Failing.dll',
                options: { xml: 'failing.xml' }
            }
        },
        msbuild: {
            tests: {
                src: ['test/Fixtures/**/*.csproj'],
                options: {
                    projectConfiguration: 'Debug',
                    targets: ['Build'],
                    version: 4.0

                }
            }
        },
        mochacli: {
            all: ['test/test.js']
        }
    });

    grunt.loadTasks('./tasks');
    grunt.loadNpmTasks('grunt-msbuild');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.registerTask('test', ['msbuild', 'mochacli']);



};
