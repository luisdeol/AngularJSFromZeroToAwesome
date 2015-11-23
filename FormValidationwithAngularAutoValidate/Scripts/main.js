var app = angular.module("minmax", [
'jcs-autoValidate'
]);

app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
        errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
        errorMessages['badUsername'] = 'Username can only contain numbers and letters';
    });
});
app.controller('MinMaxCrtl', function ($scope, $http) {
    $scope.formModel = {};
    $scope.onSubmit = function () {
            console.log("Hey, I'm submit!");
            console.log($scope.formModel);
        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
            success(function (data) {
                console.log(':)')
            }).error(function(data){
            console.log(':(')
    });
};
});