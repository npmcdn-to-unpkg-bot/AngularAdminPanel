angular.module('adminPanelApp').controller('insertRecordCtrl',insert);

//insert record controller's callback function
//injected user factory which returns ngResource functionality

function insert($scope,user){
 $scope.title="Insert custom Record Here";
  //This function will persist the user record to restful api

   $scope.addUser=function(){
   var name=$scope.name;
   var   
   console.log(name);
   var email=$scope.email;
   console.log(email);
   alert("Add User function called");
 }
}//end of function
