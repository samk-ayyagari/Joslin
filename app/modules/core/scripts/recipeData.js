(function () {
  'use strict';

  angular.module('core').factory('recipeData', recipeData);
  recipeData.inject['$http'];

  var selectedIngredient = {};

  function recipeData($http) {
    function getFoodCategories() {
      return $http.get("modules/core/JSON/foodCat.json")
        .then(function (result) {
            return result;
        });
    }

    function getCuisines() {
      return $http.get("modules/core/JSON/cuisineCat.json")
        .then(function (result) {
            return result;
        });
    }

    function getIngredients() {
      return $http.get("modules/core/JSON/ingredients.json")
        .then(function (result) {
            return result;
        });
    }

    function getRecipe() {
      return $http.get("modules/core/JSON/recipe.json")
        .then(function (result) {
            return result;
        });
    }

    function setIngredient(ingredient) {
      selectedIngredient = ingredient;
    }

    function getselectedIngredient() {
      return selectedIngredient;
    }

    return {
      getFoodCategories: getFoodCategories,
      getCuisines: getCuisines,
      getIngredients: getIngredients,
      getRecipe: getRecipe,
      setIngredient: setIngredient,
      getselectedIngredient: getselectedIngredient
    }
  }

})();
