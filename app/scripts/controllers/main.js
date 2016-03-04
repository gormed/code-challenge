'use strict';

/**
 * @ngdoc function
 * @name ngEvoraitCodeChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngEvoraitCodeChallengeApp
 */
angular.module('ngEvoraitCodeChallengeApp')
  .controller('MainCtrl', ['$scope', 'evoraitConfig', function ($scope, evoraitConfig) {
        $scope.page = {
            title: evoraitConfig.title
        };
        $scope.navigation = [
            {id: 0, name: "Home", href: "main.home", tooltip: "This is a tooltip!"}
        ];
    }]);
