

angular.module('adminPanelApp').controller('feedbackController',feedback);

//Callback function for feedback controller
function feedback(){
  var vm = this;
  vm.title = 'users';
  vm.users = [
    {
      'name': 'sharv',
      'Email': "shar123@gmail.com",
      'address': "pune"

    },
    {
      'name': 'pooja',
      'Email': "pooja123@gmail.com",
      'address': "mumbai"
    },
    {
      'name': 'ruchi',
      'Email': "ruchi123@gmail.com",
      'address': "mumbai"
    },
    {
      'name': 'pooja',
      'Email': "pooja123@gmail.com",
      'address': "mumbai"
    }
  ];
}

