'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular.module('core').controller('AboutController', AboutCtrl);
AboutCtrl.$inject = ['$scope', '$window'];

function AboutCtrl ($scope) {
  this.message = "!---ABOUT---!";

  this.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
}
