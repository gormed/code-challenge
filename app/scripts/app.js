'use strict';

/**
 * @ngdoc overview
 * @name ngEvoraitCodeChallengeApp
 * @description
 * # ngEvoraitCodeChallengeApp
 *
 * Main module of the application.
 */
angular
    .module('ngEvoraitCodeChallengeApp', [
        'ngAnimate',
        'ngSanitize',
        'ngCookies',
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras'
    ])
    .constant('evoraitConfig', {
        title: "EvoraIT Code Challenge"
})
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'views/home/main.html',
                    deepStateRedirect: "main.home",
                    controller: 'MainCtrl'
                })
                .state('main.home', {
                    url: '/home',
                    templateUrl: '../views/home/main.home.html',
                    resolve: {
                        serviceItem: function (serviceApiMock) {
                            return serviceApiMock.setup();
                        }
                    },
                    controller: 'HomeCtrl'
                });


            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);

    
