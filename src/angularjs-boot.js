'use strict'

function requireAll(requireContext) { return requireContext.keys().map(requireContext)}

const angular = require('angular');
require('@uirouter/angularjs');
require('@uirouter/angular-hybrid');

angular.module('app', [
  'ui.router',
  'ui.router.upgrade',
]);

require('./app.js');

requireAll(
  require.context('./modules', true, /^(?!.*\.(test|module)\.js).*\.js$/)
);
