(function() {
'use strict';
angular.module('newWeb')
.factory('dialogFactory', function (appData, $mdDialog, $mdMenu, $mdSidenav) {


	var defaultOptions = {
		parent: angular.element(document.body),
		clickOutsideToClose: false
	};

	/**
	 * Display any custom dialog
	 * @param  {object} options that can be passed to $mdDialog.show function
	 * can be found at https://material.angularjs.org/0.11.4/api/service/$mdDialog
	 */
	function showDialog(options) {
		// Close existing navs and menus
    	appData.hideMdMenu($mdMenu);
		appData.hideActiveNav($mdSidenav);

		angular.extend(defaultOptions, options);
		$mdDialog.show(defaultOptions);
	}

	/**
	 * Display the attachment dialog
	 * @param  {object} Mandatory to send files as array option inside local which will contain
	 * data of all the added files
	 */

	function showDeleteDialog(options) {
		options.templateUrl = 'app/modules/components/dialog/delete-dialog/delete-dialog.html';
		options.controller = 'deleteDialogController';
		showDialog(options);
	}



	function closeDialog() {
		$mdDialog.hide();
	}

	function showConfirmDialog(options) {
		var confirm = $mdDialog.confirm()
          .title(options.title)
          .content(options.content)
          .ariaLabel(options.ariaLabel)
          .targetEvent(options.targetEvent)
          .ok(options.ok)
          .cancel(options.cancel);

		return $mdDialog.show(confirm);
	}

	return {
		showDialog: showDialog,
    closeDialog: closeDialog,
		showConfirmDialog: showConfirmDialog,
		showDeleteDialog: showDeleteDialog
	};
});
})();
