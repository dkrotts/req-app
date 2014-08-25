'use strict';

var pagesJson = require('../../../data/pages.json');

/**
 * @ngInject
 */
function RequirementsCtrl($scope, $routeParams, RequirementsService) {

  var vm = this;

  $scope.$watch(getPage, setPage);

  function getPage() {
    return $routeParams.secondaryId;
  }

  function setPage(secondaryId) {
    var found = false;

    angular.forEach(pagesJson, function (primaryPage) {
      angular.forEach(primaryPage.children, function (secondaryPage) {
        if (secondaryPage.id === secondaryId) {
          found = true;
          vm.requirements = secondaryPage;
        }
      });
    });
  }

  //vm.requirements = getPage();

  RequirementsService.getSection('1.1.1')
    .then(function (res) {
      vm.section = res.data;
      console.log(res.data);
    });

}

/**
 * @ngInject
 */
function setRequirement($route, $q, RequirementsService) {
  return true;
//  var $routeParams = $route.current.params;
//
//  if ($routeParams.hasOwnProperty('primaryId')) {
//    console.log($routeParams.primaryId);
//  }
//
//  if ($routeParams.hasOwnProperty('secondaryId')) {
//    console.log($routeParams.secondaryId);
//  }
//
//  if ($routeParams.hasOwnProperty('tertiaryId')) {
//    console.log($routeParams.tertiaryId);
//  }
}

RequirementsCtrl.resolve = {
  load: setRequirement
};

module.exports = RequirementsCtrl;