'use strict';

angular.module('myApp.resume', []).controller('CVCtrl', function ($scope) {
    $scope.skillsList1 = [
        "Interviewing suppliers",
        "Drafting documents and reports",
        "Data analysis",
        "Presentation to groups",
        "Communicating technical information to non-technical external and internal stakeholders",
        "Stakeholder engagement",
        "Problem solving and troubleshooting"
    ];
    $scope.skillsList2 = [
        "Project stream planning",
        "Teamwork and coordination",
        "Web construction and administration with HTML5, SCSS, AngularJS, Ruby on Rails",
        "Detailed taste memory",
        "Competent with Microsoft Word, Excel, PowerPoint and Publisher",
        "Competent with the Linux command line interface.",
        "Change management"
    ];
});
