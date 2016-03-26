angular.module('adminPanelApp').controller('homeCtrl',homeCtrl);

function homeCtrl($scope,$auth){
    var vm=this;

    vm.title="WelCome To Admin Panel";
    vm.loginmsg="Please Login to View Dashboard"
    vm.logoutmsg="You are Already Logged in";

    //This is function to check user is already logged in or not to show navigation bar accordingly
    vm.isAuthenticated = function() {
      return $auth.isAuthenticated();

    };
  }



