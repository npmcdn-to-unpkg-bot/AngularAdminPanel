//This is login Controller use to authenticate user using satellizer

angular.module('adminPanelApp').controller('loginCtrl', loginCtrl);

// this is callback function's defination, injected $auth service to use login and authenticate methods.
function loginCtrl($auth, $state, $scope, $location) {

  var vm = this;

  // this is function which will get called on login form submit buttun
  $scope.login = function () {

    // an array of users input email and password
    var credentials = {
      email: vm.email,
      password: vm.password
    };
    // this is login method of $auth service
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
  $scope.authenticate = function (provider) {
    alert("github Login")
    $auth.authenticate(provider)
      .then(function () {
        console.log("logged innn");
        //If authenticated then goto dashboard
        $location.path('/dashboard');
      })
      .catch(function (error) {

        if (error.error) {

          // Popup error - invalid redirect_uri, pressed cancel button, etc.
          alert("invalid redirected uri");
          console.log("client error ");
        } else if (error.data) {
          // HTTP response error from server
          alert("server error");
        } else {
          alert("another server error")
        }
      });
  }//end of authenticat function

}//end of
