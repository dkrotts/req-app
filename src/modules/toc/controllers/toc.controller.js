'use strict';

var pagesJson = require('../../../data/pages.json');

/**
 * @ngInject
 */
function TOCCtrl() {

  var vm = this;

  vm.pages = pagesJson;

}

module.exports = TOCCtrl;