'use strict';

/**
 * @ngInject
 */
function RequirementsCtrl($scope, RequirementsService) {

  var vm = this;

  vm.requirements = [
    {
      "id": "1.0.0",
      "title": "Lorem ipsum dolor sit amat",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac mi eu magna maximus fringilla sed ac leo. Ut lacinia risus vel imperdiet rutrum. Aenean a libero non dui efficitur mollis. Cras nec dictum dolor. Donec efficitur elit in posuere varius. Nulla non est nec est tempus luctus sed sit amet justo. Phasellus at felis tempor, fermentum enim nec, consequat velit. Nulla facilisi. Donec consectetur id erat et congue. Praesent vel nisi pulvinar tellus bibendum dictum. Morbi et velit sed metus dignissim bibendum ornare eu tellus. In nec nunc pulvinar, vehicula felis sed, molestie lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
      "id": "1.0.1",
      "title": "Lorem ipsum dolor sit amat",
      "description": "Vivamus tristique lacus a orci lobortis, non varius mauris auctor. Integer pulvinar in lectus in dignissim. Mauris egestas purus est, sed scelerisque quam tristique in. Proin in dui in lorem rhoncus iaculis. Donec id cursus mi. Aenean imperdiet purus id mauris placerat convallis. Nullam feugiat felis a ante lacinia, eget efficitur diam ultrices. Nam maximus risus sed orci iaculis, in pretium purus pellentesque."
    },
  ]

}

/**
 * @ngInject
 */
function setRequirement($route, $q, RequirementsService) {
  var $routeParams = $route.current.params;

  if ($routeParams.hasOwnProperty('requirementId')) {
    console.log($routeParams.requirementId);
  }

  if ($routeParams.hasOwnProperty('sectionId')) {
    console.log($routeParams.sectionId);
  }
}

RequirementsCtrl.resolve = {
  load: setRequirement
};

module.exports = RequirementsCtrl;