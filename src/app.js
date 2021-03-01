'use strict';

var angular = require('angular');

angular.module('app').config([
  '$locationProvider',
  '$urlServiceProvider',
  '$urlRouterProvider',
  function(
    $locationProvider,
    $urlServiceProvider,
    $urlRouterProvider
  ) {
    $urlServiceProvider.deferIntercept();

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });

    $urlRouterProvider.otherwise('/');
  }
])
