'use strict';

module.exports = angular.module('reqApp.requirements', [])

  .controller('RequirementsCtrl', require('./controllers/requirements.controller'))

  .directive('requirement', require('./directives/requirement.directive'))

  .service('RequirementsService', require('./services/requirements.service'))

  .config(function requirementsConfig($routeProvider) {

    $routeProvider
      .when('/:secondaryId?/:tertiaryId?', {
        controller: 'RequirementsCtrl',
        controllerAs: 'req',
        templateUrl: 'templates/requirements.html',
        resolve: require('./controllers/requirements.controller').resolve
      });

  });