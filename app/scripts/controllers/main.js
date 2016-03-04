'use strict';

/**
 * @ngdoc function
 * @name ngEvoraitCodeChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngEvoraitCodeChallengeApp
 */
angular.module('ngEvoraitCodeChallengeApp')
  .controller('MainCtrl', ['evoraitConfig', function ($scope) {
        $scope.page = {
            title: evoraitConfig.title
        };
        $scope.navigation = [
            {id: 0, name: "Home", href: "main.home", tooltip: "This is a tooltip!"}
        ];
    }]);
