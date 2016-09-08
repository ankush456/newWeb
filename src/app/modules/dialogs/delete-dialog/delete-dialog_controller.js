(function() {
  'use strict';

  angular
    .module('newWeb')
    .controller('deleteDialogController', deleteDialogController);


  /** @ngInject */
  function deleteDialogController($scope, $mdDialog, deleteConfirm, title, content) {
      var vm=this;
    vm.close = function() {
        $mdDialog.hide();
      };
    vm.cancel = function() {
        $mdDialog.cancel();
      };

    vm.title = title;
      vm.content = content;

    vm.confirm = function(){
        deleteConfirm();
      vm.close();
      };
  }
})();
