//This is factory for
angular.module('adminPanelApp').service('user',user);
function user($resource){
  
  return $resource('http://movieapp-13434.onmodulus.net/api/movies/:id',{id:'@_id'},{
    update: {
      method: 'PUT'
    }
  });
}
