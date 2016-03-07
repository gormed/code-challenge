'use strict';

/**
 * @ngdoc function
 * @name ngEvoraitCodeChallengeApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ngEvoraitCodeChallengeApp
 */
angular.module('ngEvoraitCodeChallengeApp')
    .controller('HomeCtrl', ['$scope', 'serviceApiMock', 'servicePromise',
        function ($scope, serviceApiMock, servicePromise) {
            $scope.$parent.currentMenu = 0;
            $scope.serviceItem = serviceApiMock.get();
            $scope.labels = {
                modal: {
                    title: "Summary",
                    dismiss: "✖",
                    send: {
                        sendLater: "Send later",
                        submit: "Submit confirmation report"
                    }
                },
                material: {
                    materialNo: "MaterialNo",
                    description: "Description",
                    materialCode: "Material Code",
                    quantity: "Quantity",
                    annotation: ""
                },
                stage: {
                    trip: "Trip",
                    work: "Work"
                },
                metaInfo: {
                    systemRecovery: "System recovery",
                    distance: "Distance"
                },
                feedback: {
                    contactName: "Contact name",
                    contactNotAvailable: "Contact person not available",
                    signature: "Signature"
                }
            };
        }]);
