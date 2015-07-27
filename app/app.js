'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'myApp.version'
]).
    config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/projects', {
                templateUrl: 'partials/projects.html',
                controller: 'ProjectCtrl'
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/oldprojects', {
                templateUrl: 'partials/oldprojects.html',
                controller: 'OldProjectCtrl'
            })
            .otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(true);

    })
    .controller('HomeCtrl', [function () {

    }])
    .controller('ProjectCtrl', [function () {

    }])
    .controller('ContactCtrl', [function () {

    }])
    .controller('OldProjectCtrl', [function () {

    }])
    .controller('FooterCtrl', [function () {

    }])
    .directive("footer", function () {
        return {
            restrict: 'A',
            templateUrl: 'partials/footer.html',
            scope: true,
            transclude: false,
            controller: 'FooterCtrl'
        };
    });