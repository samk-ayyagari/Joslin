(function () {
  'use strict';
angular.module('core').directive("owlCarousel",
function () {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				defaultOptions.navigationText = [
			      "<i class='icon-chevron-left icon-white'><</i>",
			      "<i class='icon-chevron-right icon-white'>></i>"
			      ];
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
})
angular.module('core').directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.closest(".owl-carousel"));
			}
		}
	};
}])
})();
