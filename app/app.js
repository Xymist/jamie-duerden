'use strict';

angular.module('jamieApp', [
    'ngRoute',
    'jamieApp.routes',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'angulartics',
    'angulartics.google.analytics',
    'jamieApp.dropdownController',
    'jamieApp.cvAccordion',
    'jamieApp.resume',
    'jamieApp.projects'
])
    .controller('HomeCtrl', [function () {

    }])
    .controller('ContactCtrl', [function () {

    }])
    .config(function ($analyticsProvider) {
        $analyticsProvider.firstPageview(true);
        $analyticsProvider.withAutoBase(true);
    });

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('navi').addClass('scrolled');
  } else {
    $('navi').removeClass('scrolled');
  }
});
