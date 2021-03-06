(function(){
  'use strict';

  angular.module('core').controller('categoryController', categoryController);
  categoryController.inject = ['$scope', '$http', 'recipeData', '$rootScope'];

  function categoryController($scope, $http, recipeData, $rootScope) {

    var vm = this;
    vm.title = "By Food Category";
    vm.foodCategories = [];
    vm.cuisines = [];
    vm.ingredients = [];
    vm.selected = "F01";
    vm.setIngredient = function(ingredient){
      recipeData.setIngredient(ingredient);
      $rootScope.$broadcast('itemClicked');
    };

    var getCategories = (function(){
      recipeData.getFoodCategories()
        .then(function(categoryData){
          vm.foodCategories = categoryData.data;
        });
      })();

    var getCuisines = (function(){
      recipeData.getCuisines()
        .then(function(cuisines){
          vm.cuisines = cuisines.data;
        });
      })();

    var getIngredients = (function(){
      recipeData.getIngredients()
        .then(function(ingredients){
          vm.ingredients = ingredients.data;
        });
      })();
  }
})();
