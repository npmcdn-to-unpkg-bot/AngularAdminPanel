angular.module('adminPanelApp').controller('signupCtrl',function($scope,$auth,$location){

  // Controller to provide Data To Signup Page

  $scope.signup=function(){
    alert("Signup Called");
    var credentials={
      email:$scope.email,
      password:$scope.password
    }
    $auth.signup(credentials).then(function(response) {
      alert("signup");
      $auth.setToken(response);
      alert($auth.isAuthenticated());
      $auth.setToken();
      var t=$auth.getToken();
      alert(t);
      $location.path('/dashboard');
    }).catch(function () {
      alert("not signup");
    });

  }
});
