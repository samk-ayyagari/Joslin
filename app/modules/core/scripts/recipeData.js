(function () {
  'use strict';

  angular.module('core').factory('recipeData', recipeData);
  recipeData.inject['$http'];

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

    return {
      getFoodCategories: getFoodCategories,
      getCuisines: getCuisines
    }
  }

})();
