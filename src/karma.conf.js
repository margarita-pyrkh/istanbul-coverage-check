// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular',
      'karma-typescript',
    ],

    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-typescript'),
      require('karma-remap-istanbul'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    client: {
      clearContext: false,
    },

    reporters: [
      // 'coverage-istanbul',
      'kjhtml',
      'karma-typescript',
      'karma-remap-istanbul',
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    // autoWatch: true,
    // singleRun: false,

    browsers: [
      'Chrome',
    ],
    restartOnFileChange: true,

    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--no-sandbox',
        ],
      },
    },

    remapIstanbulReporter: {
      remapOptions: {}, //additional remap options
      reportOptions: {}, //additional report options
      reports: {
        html: 'coverage/remapped'
      }
    },

    coverageIstanbulReporter: {
      dir: 'coverage',

      reports: [
        'html',
        'text-summary',
        'lcovonly',
      ],

      combineBrowserReports: false,
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: false,

      'report-config': {
        html: {
          subdir: 'html',
        },
      },

      thresholds: {
        emitWarning: false,
        global: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80,
        },
      },

      verbose: false,
    },
  });
};
