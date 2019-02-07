var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log, $filter) {
    
    $log.log('log');
    $log.info('info');
    $log.warn('war');
    $log.debug('Some debug information while writing my code');
    $log.error('error');
    
    $scope.name = 'john'
    $scope.formatName = $filter('uppercase')($scope.name)

    $log.log($scope.name)
    $log.log($scope.formatName)

});