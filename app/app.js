'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'ui.router',
  'myApp.version'
]).
config(function($routeProvider, $locationProvider) {
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
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectCtrl'
  })
    .when('/oldprojects', {
      templateUrl: 'partials/oldprojects.html',
      controller: 'OldProjectCtrl'
  })
    .otherwise({redirectTo: '/home'});

  $locationProvider.html5Mode(true);

})
  .controller('HomeCtrl', [function() {

}])
  .controller('AboutCtrl', [function() {

}])
  .controller('ProjectCtrl', [function() {

}])
  .controller('OldProjectCtrl', [function() {

}])
  .controller('ContactCtrl', [function() {

}])
  .controller('FooterCtrl', [function() {

}])
  .directive("footer", function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/footer.html',
      scope: true,
      transclude : false,
      controller: 'FooterCtrl'
    };
});