//This is service to get json data using http
angular.module('adminPanelApp').service('userService', userService);
//service callback function defination
function userService($http, $q) {
  //this is  promise
  var deferred = $q.defer();

  //
  $http.get('http://jsonplaceholder.typicode.com/users').then(function (data) {
    //if data fetched successfully
    deferred.resolve(data);
  });
  //another function this will return promise object calling mathed
  this.getRecord = function () {
    return deferred.promise;
  }
}

