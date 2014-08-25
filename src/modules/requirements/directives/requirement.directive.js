'use strict';

/**
 * @ngInject
 */
function requirementDirective(RequirementsService) {

  var collapseSection = 'Collapse section';
  var expandSection = 'Expand section';

  var requirementScope = {
    requirement: '=ngModel'
  };

  var requirementLink = function ($scope, $element, $attrs) {
    $scope.flags = {
      isOpen: true
    };

    RequirementsService.getSection($scope.requirement.id)
      .then(function (res) {
        $scope.elements.body.html(res.data);
      });

    $scope.elements.twisty.on('click', function (e) {
      e.preventDefault();

      if ($scope.flags.isOpen === true) {
        $scope.flags.isOpen = false;
        $scope.elements.twisty.attr('title', expandSection);
      } else {
        $scope.flags.isOpen = true;
        $scope.elements.twisty.attr('title', collapseSection);
      }

      $scope.$apply();
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