'use strict';

angular.module('myApp.routes', [])
    .config(function ($routeProvider, $locationProvider) {
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
            .when('/resume', {
                templateUrl: 'partials/resume.html',
                controller: 'CVCtrl'
            })
            .otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(true);

    });