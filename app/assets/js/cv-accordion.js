'use strict';

angular.module('myApp.cvAccordion', []).controller('CVAccordionCtrl', function ($scope) {

    $scope.radio = {model :  undefined};

    $scope.jobGroups = [
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: '(January 2015 - Current)',
            details: 'The Advice Services Transformation Fund project was derived from monies provided by the Big Lottery Fund, and involved a number of interconnected streams directed towards improving the sustainability of Citizens Advice Waverley in particular and of advice services provision within Waverley in general.' +
            '' +
            'In January 2015 I made the suggestion that CAW might benefit from a Voice over IP telephone system, partly as a cost saving measure, but also as it would allow growth across the district and more streamlined, unified communications and monitoring. Furthermore, there was the option of providing communications to other organisations either at a profit or at cost. I was brought on board to investigate the merits of these options, and to implement them if it proved worthwhile. ' +
            '' +
            'I identified an approximately 20% saving in year-on-year costs and recommended this implementation; I then investigated suppliers and generated a shortlist of organisations who were invited to tender, which tenders I reviewed and submitted a recommended supplier which was ultimately accepted.' +
            '' +
            'I then liaised with the chosen supplier, management, volunteers and trustees to design the system configuration and routing, followed by overseeing the installation of the hardware and new FTTC lines across the Waverley district.' +
            '' +
            'This was followed up by continued refinement of the configuration, and training (both 1-to-1 and en masse) in the use and maintenance of the new system.'
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