var app = angular.module("teste", [
    'jcs-autoValidate',
    'angular-ladda'
]);

app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['badUsername'] = 'Username can only contain numbers and letters';
        errorMessages['badPassword']='Password needs to contain at least one Lowercase character, one Uppercase and a Number character.'
    });
});

app.controller('testeCrtl', function ($scope, $http, $timeout) {
    $scope.formModel = {};
    $scope.submitting = false;
    $scope.timeOut = function () {
        $scope.submitting = false;
    }
    $scope.onSubmit = function () {
        $scope.submitting = true;
        $timeout(callAtTimeout, 3000);
        console.log("Hey, I'm submitted!");
        console.log($scope.formModel);
    };
    function callAtTimeout (){
        $scope.submitting=false;
    };
});
