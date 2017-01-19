'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'metaservice',
  'myApp.home',
  'myApp.about',
  'myApp.blog',
  'myApp.contact',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.run([ '$rootScope', '$location', '$anchorScroll', function( $rootScope, $location, $anchorScroll) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });
}])
;
