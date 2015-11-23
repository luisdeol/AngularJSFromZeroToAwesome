var app = angular.module("minmax", []);

app.controller('MinMaxCrtl', function ($scope, $http) {
    $scope.formModel = {};
    $scope.onSubmit = function (valid) {
        if (valid) {
            console.log("Hey, I'm submit!");
            console.log($scope.formModel);
        } else {
            console.log("Invalid Form!");
        }
    //    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
    //        success(function (data) {
    //            console.log(':)')
    //        }).error(function(data){
    //        console.log(':(')
    //});
};
});