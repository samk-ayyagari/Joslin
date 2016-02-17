(function(){
  'use strict';

  angular.module('core').controller('recipeController', recipeController);
  recipeController.inject = ['$scope', '$http', 'recipeData'];

  function recipeController($scope, $http, recipeData) {

    var vm = this;
    vm.recipeDetails = "";
    vm.addIngredient = "";

    var getRecipe = (function(){
      recipeData.getRecipe()
        .then(function(recipeDetails){
          vm.recipeDetails = recipeDetails.data;
          vm.addIngredient = recipeDetails.data.ingredients[0];
        });
      })();
  }
})();
