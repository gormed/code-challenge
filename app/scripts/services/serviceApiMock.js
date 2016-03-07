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
        // mock service instance
        var service = null;
        // mock resource for services
        var MockService = $resource('/resources/json/:id', { id: '@_id'}, {
            'update': { method:'PUT' }
        });

        // service item queue
        var queue = [];

        // Resolves service item in a promise
        this.fetch = function (id) {
            return MockService.get({id: id}, function (response) {
                // construct new service object from response
                service = new Service(response);
            });
        };
        // gets the resolved service after fetch() was called
        this.get = function () {
            if (service != null) {
                return service;
            } else {
                throw TypeError("No service fetched before!");
            }

        };
        // sets the service item
        this.post = function (service) {
            this.service = service;
            MockService.update({id: service._id}, service);
        };
        // enqueues the service item for later processing
        this.enqueue = function (service) {
            queue[service._id] = service;
            return queue;
        }
    });
