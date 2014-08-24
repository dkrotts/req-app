'use strict';

angular

  .module('reqApp', [
    'ngRoute',
    require('./modules/common').name,
    require('./modules/toc').name,
    require('./modules/requirements').name
  ])

  .config(function reqAppConfig($routeProvider) {

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  });