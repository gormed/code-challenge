'use strict';

/**
 * @ngdoc service
 * @name ngEvoraitCodeChallengeApp.serviceApiMock
 * @description
 * # serviceApiMock
 * Service in the ngEvoraitCodeChallengeApp.
 */
angular.module('ngEvoraitCodeChallengeApp')
    .service('serviceApiMock', function ($http) {
        var service = null;

        this.setup = function () {
            return $http.get('resources/json/service.json').success(function (response) {
                service = response;
            });
        };
        this.getServiceItem = function () {
            return service;
        };
    });
