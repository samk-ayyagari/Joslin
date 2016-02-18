(function(){
  'use strict';

  angular.module('core').controller('recipeController', recipeController);
  recipeController.inject = ['$scope', '$http', 'recipeData', '$rootScope'];

  function recipeController($scope, $http, recipeData, $rootScope) {

    var vm = this;
    vm.recipeDetails = "";
    vm.addIngredient = "";

    vm.addToRecipe = function(ingredient){
      vm.recipeDetails.ingredients.push(angular.copy(ingredient));
    }
    vm.setIngredient = function(ingredient){
      vm.addIngredient = ingredient;
    }

    var getRecipe = (function(){
      recipeData.getRecipe()
        .then(function(recipeDetails){
          vm.recipeDetails = recipeDetails.data;
          vm.addIngredient = recipeDetails.data.ingredients[0];
        });
      })();

    $rootScope.$on('itemClicked', function () {
        vm.addIngredient = recipeData.getselectedIngredient();
      })
  }
})();
