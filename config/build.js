requirejs.config({
  // wrap: true,
  // allowSourceOverwrites: true,
  // insertRequire: ['office'],
  // deps: ['office'],
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-ujs': ['angular']
  },
  paths: {
    'require': '../../../../../bower_components/requirejs/require',
    'angular':     '../../../../../bower_components/angular/angular',
    'angular-ujs': '../../../../../bower_components/angular-ujs/build/angular-ujs'
  }
})

