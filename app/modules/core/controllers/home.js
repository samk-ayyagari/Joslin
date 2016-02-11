'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular.module('core').controller('HomeController', Homectrl);
Homectrl.inject = ['$scope'];

function Homectrl($scope) {
  this.tabs = [
    { title:'By Food Category', content: "modules/core/views/foodCategory.html" },
    { title:'By Cuisine Category', content: "modules/core/views/cuisineCategory.html" }
  ];
  this.model = {
    name: 'Tabs'
  };
}
