/**
 * Created by Hans on 04.03.2016.
 */
'use strict';


angular.module('ngEvoraITCodeChallenge').component('confirmationFeedbackSign', {
    template: "<button role=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.showSummary()\">Summary</button>",
    bindings: {
        stages: "<",
        metaInfo: "<",
        materialList: "<"
    },
    controller: ['$scope', '$element', '$attrs', '$uibModal',
        function ($scope, $element, $attrs, $uibModal) {
            var ctrl = this;
            ctrl.showSummary = function () {
                $uibModal.open({
                    templateUrl: "scripts/components/confirmationFeedbackSign.html",
                    placement: "top",
                    backdrop: "static",
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