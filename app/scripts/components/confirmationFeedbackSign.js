'use strict';

/**
 * @ngdoc component
 * @name ngEvoraitCodeChallengeApp.confirmationFeedbackSign
 * @description
 * # confirmationFeedbackSign
 * Component in the ngEvoraitCodeChallengeApp.
 */
angular.module('ngEvoraitCodeChallengeApp').component('confirmationFeedbackSign', {
    template: "<button role=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.showSummary()\">Summary</button>",
    bindings: {
        serviceItem: "<"
    },
    controller: ['$scope', '$element', '$attrs', '$uibModal',
        function ($scope, $element, $attrs, $uibModal) {
            var ctrl = this;
            ctrl.showSummary = function () {
                $uibModal.open({
                    templateUrl: "scripts/components/confirmationFeedbackSign.html",
                    placement: "top",
                    backdrop: "static",
                    scope: {

                    },
                    controller: function ($scope, $uibModalInstance) {
                        $scope.sendLater = function () {
                            $uibModalInstance.close({enqueue: {}});
                        };

                        $scope.submit = function () {
                            $uibModalInstance.close({submit: {}});
                        };

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
                });
            };
        }
    ]
});