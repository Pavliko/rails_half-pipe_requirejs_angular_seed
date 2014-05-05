define [
  'angular',
  'angular-ujs',
  './common/controllers/BaseCtrl'
], (angular) ->
  angular.module 'office', ['office.common']
  angular.element(document).ready ->
    angular.bootstrap document, ['office']
    console.log 'angular bootstrapped'
  angular


