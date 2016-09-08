/* global malarkey:false, moment:false */
(function () {
  'use strict';

  angular
    .module('newWeb')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .value('appData', {
      activeNav: "",
      Version: '0.0.1',
      hideActiveNav: function (mdSidenav) {
        if (this.activeNav !== "") {
          mdSidenav(this.activeNav).close();
        }
      },
      hideMdMenu: function (mdMenu) {
        mdMenu.hide();
      },
      hideMdDialog: function (mdDialog) {
        mdDialog.hide();
      }
    });
})();
