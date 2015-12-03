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
        var request = new XMLHttpRequest();
        request.open("GET", "/projects.json", false);
        request.send(null);

        var projectData = JSON.parse(request.responseText);

        $scope.projects = projectData;
    }])
    .controller('ContactCtrl', [function () {

    }])
    .config(function ($analyticsProvider) {
        $analyticsProvider.firstPageview(true);
        $analyticsProvider.withAutoBase(true);
    });
