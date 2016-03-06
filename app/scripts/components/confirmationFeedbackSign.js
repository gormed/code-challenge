'use strict';

/**
 * @ngdoc component
 * @name ngEvoraitCodeChallengeApp.confirmationFeedbackSign
 * @description
 *
 * Creates a customer feedback summary modal.
 *
 * Uses https://github.com/szimek/signature_pad and https://github.com/legalthings/angular-signature
 * for signature processing
 *
 * # confirmationFeedbackSign
 * Component in the ngEvoraitCodeChallengeApp.
 */
angular.module('ngEvoraitCodeChallengeApp').component('confirmationFeedbackSign', {
    template: "<button role=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.showSummary()\">Summary</button>",
    bindings: {
        serviceItem: "<",
        labels: "<"
    },
    controller: ['$scope', '$log', '$element', '$attrs', '$uibModal', 'serviceApiMock',
        function ($scope, $log, $element, $attrs, $uibModal, serviceApiMock) {
            var ctrl = this;
            ctrl.showSummary = function () {

                var modalInstance = $uibModal.open({
                    templateUrl: "scripts/components/confirmationFeedbackSign.html",
                    placement: "top",
                    backdrop: "static",
                    resolve: {
                        serviceItem: function () {
                            return ctrl.serviceItem
                        },
                        labels: function () {
                            return ctrl.labels;
                        }
                    },
                    controller: function ($scope, $uibModalInstance, serviceItem, labels) {
                        $scope.serviceItem = serviceItem;
                        $scope.labels = labels;

                        $scope.forms = {
                            feedbackForm: null
                        };

                        $scope.clearSignature = null;
                        $scope.acceptSignature = null;

                        $scope.signature = {
                            acceptSignature: undefined,
                            clearSignature: undefined,
                            dataUrl: serviceItem.customerFeedback.contactSignature ?
                                serviceItem.customerFeedback.contactSignature.dataUrl : ""
                        };

                        $scope.customerFeedback = serviceItem.customerFeedback;

                        $scope.clearAndUpdate = function () {
                            $scope.signature.clearSignature();
                            $scope.updateSignature();
                        };

                        $scope.updateSignature = function () {
                            $scope.customerFeedback.contactSignature =
                                $scope.signature.acceptSignature();
                        };

                        $scope.$watch('customerFeedback.contactNotAvailable',
                            function (contactNotAvailable) {
                                if (contactNotAvailable) {
                                    $scope.clearAndUpdate();
                                }
                            });

                        $scope.sendLater = function () {
                            try {
                                $scope.serviceItem.customerFeedback = $scope.customerFeedback;
                            } catch (err) {
                                $log.warn(err);
                            } finally {
                                $uibModalInstance.close({enqueue: $scope.serviceItem});
                            }
                        };

                        $scope.canSubmit = function () {
                            try {
                                $scope.serviceItem.customerFeedback = $scope.customerFeedback;
                                return $scope.forms.feedbackForm.$valid && $scope.serviceItem.canSubmit();
                            } catch (err) {
                                return false;
                            }
                        };

                        $scope.submit = function () {
                            if ($scope.forms.feedbackForm.$valid) {
                                try {
                                    $scope.serviceItem.customerFeedback = $scope.customerFeedback;
                                    $uibModalInstance.close({submit: $scope.serviceItem});
                                } catch (err) {
                                    $log.error(err);
                                }
                            } else {
                                $log.error("Submit request is invalid!");
                            }
                        };

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
                });
                modalInstance.result.then(function (result) {
                    if (result.hasOwnProperty('submit')) {
                        serviceApiMock.post(result.submit);
                    } else if (result.hasOwnProperty('enqueue')) {
                        serviceApiMock.enqueue(result.enqueue);
                    }
                }, function () {

                });
            };
        }
    ]
});