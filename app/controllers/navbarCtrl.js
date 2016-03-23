
angular.module('adminPanelApp')
  .controller('NavBarController', function($scope, $auth) {

    //This is function to check user is already logged in or not to show navigation bar accordingly

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });
