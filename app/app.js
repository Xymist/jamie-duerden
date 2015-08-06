'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'myApp.cvAccordion'
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
    .controller('OldProjectCtrl', function ($scope) {
        $scope.skillsList = [
            "Interviewing suppliers",
            "Drafting documents and reports",
            "Data analysis",
            "Presentation to groups",
            "Communicating technical information to non-technical external and internal stakeholders",
            "Stakeholder engagement",
            "Problem solving and troubleshooting",
            "Project stream planning",
            "Teamwork and coordination",
            "Web construction and administration with HTML5, SCSS, AngularJS, Ruby on Rails",
            "Detailed taste memory",
            "Competent with Microsoft Word, Excel, PowerPoint and Publisher",
            "Competent with the Linux command line interface.",
            "Change management"
        ];
    })
    .controller('DropdownCtrl', function ($scope, $log) {

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    });