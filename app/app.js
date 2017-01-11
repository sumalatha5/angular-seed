'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'metaservice',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.run([ '$rootScope', '$location', '$anchorScroll', function( $rootScope, $location, $anchorScroll) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });
}])
;
