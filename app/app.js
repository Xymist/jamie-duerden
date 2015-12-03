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
        $scope.projects = [
            {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
            {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
            {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
            {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
            {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
            {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"}
        ];
    }])
    .controller('ContactCtrl', [function () {

    }])
    .config(function ($analyticsProvider) {
        $analyticsProvider.firstPageview(true);
        $analyticsProvider.withAutoBase(true);
    });

