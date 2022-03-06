
// Counter up js
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Angular js
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.fname = '', [$scope.required ];
    $scope.lname = '', [$scope.required ];
    $scope.email = '', [$scope.required, $scope.email ];
});