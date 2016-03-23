angular.module('adminPanelApp').controller('UserController', UserController);

function UserController($http) {

  var vm = this;

  vm.users;
  vm.error;

  vm.getUsers = function() {

    // This request will hit the index method in the AuthenticateController
    // on the Laravel side and will return the list of users
    $http.post('http://54.165.130.78:3000/api/v3/user_post/verify').success(function(users) {
      vm.users = users;
    }).error(function(error) {
      vm.error = error;
    });
  }
}
