angular.module('adminPanelApp').directive('myUser', function () {
  return {
    restrict: 'E',
    transclude: 'true',
    templateUrl: 'templates/Feedback/productTemplate.html',
    link: function (scope, element, attr) {


      scope.title = attr.title;
      scope.name = attr.title;
      scope.email = attr.email;

    },
    controller: function ($scope) {
      $scope.collapsedCard = function () {
        console.log($scope);
        $scope.collapsedState = !$scope.collapsedState;
      };
      $scope.collapsedState = ($scope.collapsed === 'true');
      $scope.$watch('user', function (newVal, oldVal) {
        console.log('test ' + newVal + ' test ' + oldVal);
        return newVal;
      });
    }
  };
});
