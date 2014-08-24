'use strict';

/**
 * @ngInject
 */
function scopeElementDirective() {

  var scopeElementLink = function ($scope, $element, $attrs) {
    $scope.elements = $scope.elements || {};

    if (angular.isDefined($attrs.scopeElement)) {
      $scope.elements[$attrs.scopeElement] = $element;
    }
  };

  return {
    link: scopeElementLink,
    priority: 999,
    restrict: 'A'
  }
}

module.exports = scopeElementDirective;