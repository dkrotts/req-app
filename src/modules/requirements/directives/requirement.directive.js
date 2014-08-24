'use strict';

/**
 * @ngInject
 */
function requirementDirective() {

  var collapseSection = 'Collapse section';
  var expandSection = 'Expand section';

  var requirementScope = {
    requirement: '=ngModel'
  };

  var requirementLink = function ($scope, $element, $attrs) {
    $scope.isOpen = true;

    $scope.elements.twisty.on('click', function() {
      if ($scope.isOpen === true) {
        $scope.isOpen = false;
        $scope.elements.twisty.attr('title', expandSection);
      } else {
        $scope.isOpen = true;
        $scope.elements.twisty.attr('title', collapseSection);
      }
    });

    $element.on('mouseover', function () {
      $scope.elements.requirementContainer.addClass('active');
    });

    $element.on('mouseout', function () {
      $scope.elements.requirementContainer.removeClass('active');
    });
  };

  return {
    link: requirementLink,
    require: 'ngModel',
    restrict: 'E',
    scope: requirementScope,
    templateUrl: 'templates/requirement.html'
  }
}

module.exports = requirementDirective;