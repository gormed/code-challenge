'use strict';

/**
 * @ngdoc service
 * @name ngEvoraITCodeChallenge.apiServiceMock
 * @description
 * # apiServiceMock
 * Service in the ngEvoraITCodeChallenge.
 */
angular.module('ngEvoraITCodeChallenge')
    .service('apiServiceMock', function ($http) {
        var service = null;
        var materials = null;
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.setup = function () {
            $http.get('resources/json/materials.json').then(function (response) {
                materials = response;
            });
            $http.get('resources/json/service.json').then(function (response) {
                service = response;
            })
        };
    });
