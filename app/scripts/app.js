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
        'ngResource',
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
                    templateUrl: '../views/main/main.html',
                    deepStateRedirect: "main.home",
                    controller: 'MainCtrl'
                })
                .state('main.home', {
                    url: '/home',
                    templateUrl: '../views/main/main.home.html',
                    resolve: {
                        servicePromise: function (serviceApiMock) {
                            return serviceApiMock.fetch('mockService.json');
                        }
                    },
                    controller: 'HomeCtrl'
                });


            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);

    
