
angular.module('adminPanelApp').controller('recordController', function ($scope, userService) {
  var promise = userService.getRecord();
  promise.then(function (response) {
    $scope.users = response.data;
    console.log($scope.users);
  });
}).service('userService', ['$http', '$q', function ($http, $q) {
  var deferred = $q.defer();
  $http.get('http://jsonplaceholder.typicode.com/users').then(function (data) {
    deferred.resolve(data);
  });
  this.getRecord = function () {
    return deferred.promise;
  }
}]);
