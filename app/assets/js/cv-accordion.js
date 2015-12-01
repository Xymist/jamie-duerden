'use strict';

angular.module('myApp.cvAccordion', []).controller('CVAccordionCtrl', function ($scope) {

    $scope.radio = {model :  undefined};

    $scope.jobGroups = [
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: '(January 2015 - Current)',
            details: 'The Advice Services Transformation Fund project is funded by the Big Lottery, and has given money to many Citizens Advice offices and other charities across the UK. Please see my Projects page for more details.'
        },
        {
            employer: "Maid in Sheffield",
            title: 'Technical Director ',
            dates: '(July 2014 - March 2015)',
            details: 'This was a business set up by myself and a friend as an experiment after university. I designed and built the website (it was my first major Ruby project), the code for which you can see in the Archived Projects section.' +
            '<br/><br/>' +
            'I learned a number of things from this project, some of them to do with coding and web design, but also with business. Although I wasn\'t involved in the acquisition of human resources, I did oversee the payments and bookings system, and was responsible for maintaining the server and website which were the core of the business. '
        },
        {
            employer: "Richard Royds Fine Wines Ltd",
            title: 'Technical Support ',
            dates: '(June 2010 - Current)',
            details: 'From developing my taste memory and food-matching skills in selling cheese and fine wines, to hosting and assisting with the hosting of wine tastings, through to establishing and maintaining the website, product database and stock control systems for the business, I have done a great deal of work for Richard over the last five years, on all sides of the business.' +
            '<br/><br/>' +
            'I no longer have any hand in the retail side of the business, though I do still assist with hosting wine tastings. However, I remain the systems administrator, and have at this point constructed or installed all the computer hardware used on site.'
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