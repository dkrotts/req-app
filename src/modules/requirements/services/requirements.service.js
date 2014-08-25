'use strict';

/**
 * @ngInject
 */
function RequirementsService($http) {
  var rs = this;

  rs.getSection = function(id) {
    return $http.get('templates/' + id + '.html');
  };

}

module.exports = RequirementsService;