'use strict';

angular.module('app').config([
  '$stateProvider',
  function($stateProvider) {

  $stateProvider
    .state('angular1', {
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('angular1.test', {
    component: 'testAngularJsComponent',
    url: '/angular1/test'
  })
  }
])
