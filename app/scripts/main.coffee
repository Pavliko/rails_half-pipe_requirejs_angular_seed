define [
  'angular',
  'angular-ujs',
  'app'
], (angular) ->
  angular.element(document).ready ->
    angular.bootstrap(document, ['office']);

