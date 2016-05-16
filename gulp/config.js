module.exports = {
  src: './src',
  dest: './_site',
  DIST_TOOLKIT_JS      : 'dist/toolkit.js',
  LESS_TOOLKIT_SOURCES : './_less/toolkit*',
  LESS_DOC_SOURCES     : './_less/docs.less',
  LESS_MAIN_SOURCES    : './_less/main.less',
  JS                   : [
    './js/application.js',
    './js/jquery.min.js'
  ],
  JS_TOOLKIT             : [
    './js/bootstrap/transition.js',
    './js/bootstrap/alert.js',
    './js/bootstrap/affix.js',
    './js/bootstrap/button.js',
    './js/bootstrap/carousel.js',
    './js/bootstrap/collapse.js',
    './js/bootstrap/dropdown.js',
    './js/bootstrap/modal.js',
    './js/bootstrap/tooltip.js',
    './js/bootstrap/popover.js',
    './js/bootstrap/scrollspy.js',
    './js/bootstrap/tab.js',
    './js/custom/*'
  ]
};
