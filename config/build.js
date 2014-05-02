requirejs.config({
  wrap: true,
  insertRequire: ['office'],
  deps: ['office'],
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  paths: {
    'domReady':    '../../../../../bower_components/requirejs-domready/domReady',
    'angular':     '../../../../../bower_components/angular/angular',
    'angular-ujs': '../../../../../bower_components/angular-ujs/build/angular-ujs',
    'office': 'main'
  }
})

