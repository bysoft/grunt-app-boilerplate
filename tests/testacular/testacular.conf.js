basePath = '';

files = [
  MOCHA,
  MOCHA_ADAPTER,

  'app/vendor/chai/chai.js',

  REQUIRE,
  REQUIRE_ADAPTER,

  'runner/main.js',

  { pattern: 'app/{modules,scripts,templates}/**/*', included: false},
  { pattern: 'spec/**/*', included: false}
];

exclude = [
  'testacular.conf.js'
];

// possible values: dots || progress
reporter = 'dots';

// web server port
port = 9876;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['Chrome', 'Firefox'];

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

preprocessors = {
  '**/*.coffee': 'coffee'
};