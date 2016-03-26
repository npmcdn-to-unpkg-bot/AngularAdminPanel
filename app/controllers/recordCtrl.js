
angular.module('adminPanelApp').controller('recordController',recordController);

function recordController($scope, userService) {
  var promise = userService.getRecord();

  promise.then(function (response) {
    $scope.users = response.data;
    console.log($scope.users);
  });
}
