'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
    .module('ngOnePager', [
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('main', {
                url: '',
                templateUrl: 'views/home/main.html',
                deepStateRedirect: "main.home",
                controller: function ($scope) {
                    $scope.page = {
                        title: "One Pager"
                    };
                    $scope.navigation = [
                        { id: 0, name: "Home", href: "#/home", tooltip: "This is a tooltip!" }
                    ];
                }
            })
            .state('main.home', {
                url: '/home',
                templateUrl: '../views/home/main.home.html',
                controller: function ($scope) {
                    $scope.$parent.currentMenu = 0;
                }
            })
    }]);

    
