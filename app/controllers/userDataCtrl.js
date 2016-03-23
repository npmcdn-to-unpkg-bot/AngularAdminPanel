angular.module('adminPanelApp').controller('userDataCtrl', function ($scope) {

  var vm = this;
  vm.message = "User Information";

  vm.showTable = true;
  $scope.selectedRow = 0;
  //        vm.title='names';
  vm.names = [
    {name: 'sharvari', Email: 'sharv@gmail.com', ContactNo: 12345678},
    {name: 'naresh', Email: 'naresh@gmail.com', ContactNo: 7812345668},
    {name: 'sourabh', Email: 'sourabh@gmail.com', ContactNo: 34566778},
    {name: 'mrunal', Email: 'mrunal@gmail.com', ContactNo: 15475678},
    {name: 'priyanka', Email: 'priynka@gmail.com', ContactNo: 1234556778},
    {name: 'komal', Email: 'komal@gmail.com', ContactNo: 5678905678},
    {name: 'anurag', Email: 'anurag@gmail.com', ContactNo: 5671245678},
    {name: 'azhar', Email: 'azhar@gmail.com', ContactNo: 72098765678}


  ];
  $scope.setClickedRow = function(index){

    $scope.selectedRow = index;
  };

  $scope.$watch('selectedRow', function() {
  });
  $scope.orderByMe = function (x) {
    $scope.myOrderBy = x;
  }
});
