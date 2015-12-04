'use strict';
angular.module('jamieApp.projects', []).controller('ProjectCtrl', function ($scope) {
    $scope.projects = [
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png", "id":"firstID"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png", "id":"secondID"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png", "id":"thirdID"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png", "id":"fourthID"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png", "id":"fifthID"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png", "id":"sixthID"}
    ]
});
