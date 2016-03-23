angular.module('adminPanelApp').controller('loginCtrl', AuthController);


function AuthController($auth,$state,$http,$scope,$q,$location) {


   var vm=this;
  if($auth.isAuthenticated()) console.log('logged in');

  // this is function which will get called on form submit buttun
$scope .login = function() {
    alert("in Login");
    var credentials = {
      email: vm.email,
      password: vm.password
    };
    $auth.login(credentials).then(function (data) {
      console.log($auth.getToken());
      alert("logged in");
      // If login is successful, redirect to the users state
      $state.go('dashboard', {});
    }).catch(function (error) {
      vm.error = error;
      alert("Not Login");
    });

  };


  //This is a function to authenticate user using social media sites like facebook,twitter,github etc

  $scope.authenticate=function(provider){
    alert("in authentiacte");
    $auth.authenticate(provider)
      .then(function() {
        console.log("logged innn");

        $location.path('/dashboard');
      })
      .catch(function(error) {
        if (error.error) {
          // Popup error - invalid redirect_uri, pressed cancel button, etc.
          alert("invalid redirected uri");
          console.log("client error ");

        } else if (error.data) {
          // HTTP response error from server

          alert("server error");
          //toastr.error(error.data.message, error.status);
        } else {
          //toastr.error(error);
          alert("another server error")
        }
      });
  }

}
