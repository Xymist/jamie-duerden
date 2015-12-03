'use strict';
angular.module('myApp.projects', []).controller('ProjectCtrl', function ($scope) {
    $scope.projects = [
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"}
    ]
});
