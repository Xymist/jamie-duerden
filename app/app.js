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
    'myApp.resume',
    'myApp.projects'
])
    .controller('HomeCtrl', [function () {

    }])
    .controller('ContactCtrl', [function () {

    }])
    .config(function ($analyticsProvider) {
        $analyticsProvider.firstPageview(true);
        $analyticsProvider.withAutoBase(true);
    });

