// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('karma-htmlfile-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    htmlReporter: {
      outputFile: 'reports/unit/test-results.html',

      // Optional
      pageTitle: 'Star wars Unit Tests',
      subPageTitle: '',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: false
    },
    junitReporter: {
      outputDir: 'reports/unit',
      outputFile: 'test-results.xml'
    },
    reporters: ['progress', 'html', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    //browsers: ['ChromeHeadless'],
    browsers: ['Chrome'],
    singleRun: false
  });
};
