angular.module('adminPanelApp')
  .controller('logoutController', function($location, $auth) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        alert("LogOut");
        $location.path('/home');
      });
  });
