(function () {
  'use strict';

  angular
    .module('newWeb')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, login,appPopupFactory,$cookies,$state) {
    var vm = this;
    vm.login = function (loginCredendial) {
      var data='username=' + loginCredendial.username + '&password=' + loginCredendial.password;
      vm.loginCredendial = loginCredendial;
      login.post(data).then(function (response) {
        vm.user = response.access_token_id;
        $cookies.put('Authorization', 'Bearer ' + vm.user);
        appPopupFactory.showSimpleToast('Login Successfully');

        $state.go('dashboard');
      },
      function(response) {
        appPopupFactory.showSimpleToast('Wrong Password');
        console.log("Error with status code", response.status);
      });

    }


  }
})();
