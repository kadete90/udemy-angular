var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    
    $scope.getname = function() {
        return 'John Doe';
    }
    
    console.log($scope);
    
});


var searchPeople = function (firstName, lastName, height, age, occupation){
    return 'Flavio Cadete';
}

console.log(searchPeople(1,2,3,4,5))