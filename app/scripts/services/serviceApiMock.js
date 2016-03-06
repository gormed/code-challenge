'use strict';

/**
 * @ngdoc service
 * @name ngEvoraitCodeChallengeApp.serviceApiMock
 * @description
 * # serviceApiMock
 * Service in the ngEvoraitCodeChallengeApp.
 */
angular.module('ngEvoraitCodeChallengeApp')
    .service('serviceApiMock', function ($http, $resource) {
        var service = null;
        var MockService = $resource('/resources/json/:id', { id: '@_id'}, {
            'update': { method:'PUT' }
        });

        var queue = [];

        this.fetch = function (id) {
            MockService.get({id: id}, function (response) {
                service = new Service(response);
            });
            return service;
        };
        this.get = function () {
            if (service != null) {
                return service;
            } else {
                throw TypeError("No service fetched before!");
            }

        };
        this.post = function (service) {
            this.service = service;
            MockService.update({id: service._id}, service);
        };
        this.enqueue = function (service) {
            queue[service._id] = service;
            return queue;
        }
    });
