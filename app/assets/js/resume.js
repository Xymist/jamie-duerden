'use strict';
//Would be one list. This is a workaround to a problem that no longer exists with the formatting on the CV page. TODO: Merge lists, put ng-repeat in the right places in the HTML
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
        "Web construction and administration with HTML5, CSS3, Angular 1, Ruby on Rails, SCSS",
        "Detailed taste memory",
        "Competent with Microsoft Word, Excel, PowerPoint and Publisher",
        "Training and Coaching",
        "Competent with the Linux command line interface.",
        "Change management"
    ];
});
