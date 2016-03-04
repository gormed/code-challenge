'use strict';

/**
 * @ngdoc overview
 * @name ngEvoraITCodeChallenge
 * @description
 * # ngEvoraITCodeChallenge
 *
 * Main module of the application.
 */
angular
    .module('ngEvoraITCodeChallenge', [
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
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'evoraitConfig',
        function ($stateProvider, $urlRouterProvider, $locationProvider, evoraitConfig) {

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
                    controller: 'HomeCtrl'
                });


            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);

    
