'use strict';

angular.module('myApp.cvAccordion', []).controller('CVAccordionCtrl', function ($scope) {
    $scope.jobGroups = [
        {
            employer: "Citizens' Advice Waverley",
            title: 'Project Technical Officer',
            dates: 'January 2015 - Current',
            details: ''
        },
        {
            employer: "Maid in Sheffield (BRD22OY Ltd)",
            title: 'Technical Director',
            dates: 'July 2014 - March 2015',
            details: ''
        },
        {
            employer: "Richard Royds Fine Wines Ltd",
            title: 'Technical Support',
            dates: 'June 2010 - Current',
            details: ''
        }
    ];

    $scope.educationGroups = [
        {
            school: "University of Bath",
            title: 'BSc Chemistry',
            dates: 'October 2011 - July 2014',
            details: 'Second Class Honours, Second Division'
        },
        {
            school: "Winchester College",
            title: 'A Levels',
            dates: 'September 2008 - July 2010',
            details: ''
        }
    ];

    $scope.hobbyGroups = [
        {
            activity: "",
            skillLevel: "",
            details: ""
        },
        {
            activity: "",
            skillLevel: "",
            details: ""
        }
    ];

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
});