angular.module('adminPanelApp').controller('logoutController', logoutController);
//this is callback function's defination for logout controller
function logoutController($auth,$location){
  if (!$auth.isAuthenticated()) { return; }
  $auth.logout()
    .then(function() {
      alert("LogOut");
      $location.path('/home');
    });
}


