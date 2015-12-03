'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.routes',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'angulartics',
    'angulartics.google.analytics',
    'myApp.dropdownController',
    'myApp.cvAccordion',
    'myApp.resume'
])
    .controller('HomeCtrl', [function () {

    }])
    .controller('ProjectCtrl', [function ($scope) {
        $scope.projects = $.getJSON('projects.json');
    }])
    .controller('ContactCtrl', [function () {

    }])
    .config(function ($analyticsProvider) {
        $analyticsProvider.firstPageview(true);
        $analyticsProvider.withAutoBase(true);
    });

