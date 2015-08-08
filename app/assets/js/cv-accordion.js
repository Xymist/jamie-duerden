'use strict';

angular.module('myApp.cvAccordion', []).controller('CVAccordionCtrl', function ($scope) {

    $scope.radio = {model :  undefined};

    $scope.jobGroups = [
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: '(January 2015 - Current)',
            details: 'Working to provide VoIP'
        },
        {
            employer: "Maid in Sheffield",
            title: 'Technical Director ',
            dates: '(July 2014 - March 2015)',
            details: 'Website construction'
        },
        {
            employer: "Richard Royds Fine Wines Ltd",
            title: 'Technical Support ',
            dates: '(June 2010 - Current)',
            details: 'Systems administration'
        }
    ];

    $scope.educationGroups = [
        {
            school: "University of Bath ",
            title: 'BSc Chemistry',
            dates: '(October 2011 - July 2014)',
            details: 'Second Class Honours, Second Division'
        },
        {
            school: "Winchester College ",
            title: 'A Levels',
            dates: '(September 2008 - July 2010)',
            details: 'Various'
        }
    ];

    $scope.hobbyGroups = [
        {
            activity: "Skydiving",
            skillLevel: "BPA A Licence",
            details: "Summer only"
        },
        {
            activity: "SCUBA Diving",
            skillLevel: "PADI Open Water Diver",
            details: "Summer only"
        }
    ];

}).directive('detailDirective', function(){
    return{
        transclude: true,
        template: '<h5>{{job.title}}{{school.school}}{{job.dates}}{{school.dates}}{{hobby.skillLevel}}</h5><p>{{job.details}}{{school.details}}{{hobby.details}}</p>'
    }
});