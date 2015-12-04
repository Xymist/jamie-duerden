'use strict';
angular.module('jamieApp.projects', []).controller('ProjectCtrl', function ($scope) {
    $scope.projects = [
        {"title":"ASTF VoIP", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"ASTF Kiosks", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"Waverley Advice Website", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"test title", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"Maid in Sheffield", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"},
        {"title":"Haslemere Cellar website", "description":"test description", "imageLink":"/site/app/assets/img/logo.png"}
    ]
});
