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

                        // will store the feedback-form
                        $scope.forms = {
                            feedbackForm: null
                        };

                        // signature handling
                        $scope.signature = {
                            acceptSignature: undefined, // gets defined by signature-pad
                            clearSignature: undefined, // gets defined by signature-pad
                            updateSignature: function () {
                                $scope.customerFeedback.contactSignature =
                                    this.acceptSignature();
                            },
                            clearAndUpdate: function () {
                                this.clearSignature();
                                this.updateSignature();
                            },
                            dataUrl: serviceItem.customerFeedback.contactSignature ?
                                serviceItem.customerFeedback.contactSignature.dataUrl : ""
                        };

                        // reset signature if contact is not available
                        $scope.$watch('customerFeedback.contactNotAvailable',
                            function (contactNotAvailable) {
                                if (contactNotAvailable) {
                                    $scope.signature.clearAndUpdate();
                                }
                            });

                        // temp store for the feedback data
                        $scope.customerFeedback = serviceItem.customerFeedback;

                        // enqueues the service summary
                        $scope.sendLater = function () {
                            try {
                                $scope.serviceItem.customerFeedback = $scope.customerFeedback;
                            } catch (err) {
                                $log.warn(err);
                            } finally {
                                $uibModalInstance.close({enqueue: $scope.serviceItem});
                            }
                        };

                        // checks if the summary form is filled properly
                        $scope.canSubmit = function () {
                            try {
                                $scope.serviceItem.customerFeedback = $scope.customerFeedback;
                                return $scope.forms.feedbackForm.$valid && $scope.serviceItem.canSubmit();
                            } catch (err) {
                                return false;
                            }
                        };

                        // submits the filled form
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
                    } else {
                        serviceApiMock.fetch();
                    }
                }, function () {

                });
            };
        }
    ]
});