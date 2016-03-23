angular.module('adminPanelApp').filter('myFilter', function () {
  return function (value) {
    return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
  }

});
