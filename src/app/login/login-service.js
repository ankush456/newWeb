angular.module('newWeb')

  .factory('login', function (Restangular) {
  return Restangular.service('admin/auth');
});


