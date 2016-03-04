'use strict';

/**
 * @ngdoc function
 * @name ngEvoraitCodeChallengeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ngEvoraitCodeChallengeApp
 */
angular.module('ngEvoraitCodeChallengeApp')
    .controller('HomeCtrl', ['$scope', 'serviceApiMock', 'serviceItem', function ($scope, serviceApiMock, serviceItem) {
        $scope.$parent.currentMenu = 0;
        $scope.serviceItem = serviceApiMock.getServiceItem();
    }]);
