var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

    $scope.name = 'Flavio';
    $scope.occupation = 'Developer';

    $scope.myFunc = function(){
        return 'MyFunc';
    }

    console.log($scope);

    console.log($scope.myFunc());
});