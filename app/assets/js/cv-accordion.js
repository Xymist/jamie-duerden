'use strict';

angular.module('myApp.cvAccordion', []).controller('CVAccordionCtrl', function ($scope) {
    $scope.groups = [
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: 'January 2015 - Current',
            details: ''
        },
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: '',
            details: ''
        }
    ];
});