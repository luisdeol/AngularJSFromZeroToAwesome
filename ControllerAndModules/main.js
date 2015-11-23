var app = angular.module("minmax", []);

app.controller('MinMaxCrtl', function ($scope) {
    $scope.formModel = {};
    $scope.onSubmit = function () {
        console.log("Hey, I'm submit!");
        console.log($scope.formModel);
    }
});