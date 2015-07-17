'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.version'
]).
config(function($routeProvider) {
  $routeProvider
    .when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
  })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'
  })
    .otherwise({redirectTo: '/home'});

})
  .controller('HomeCtrl', [function() {

}])
  .controller('AboutCtrl', [function() {

}])
  .controller('ContactCtrl', [function() {

}]);