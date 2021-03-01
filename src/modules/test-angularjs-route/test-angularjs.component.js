TestAngularJsComponentCtrl.$inject = [];

function TestAngularJsComponentCtrl() {
  var vm = this;
}

angular.module('app').component('testAngularJsComponent', {
  template: require('html-loader!./test-angularjs.component.html'),
  controller: TestAngularJsComponentCtrl,
  controllerAs: 'vm'
});
