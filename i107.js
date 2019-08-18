iweb.controller('i107', function($scope,$routeParams) {
  $scope.entity={}
  $scope.close=function(){
    history.go(-1)
  }
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'newsdetail',
      id:$routeParams.id,
      location:'pc',
    },function (jo) {
      $scope.detail=jo.info
    })
    window.ajax({
      obj:'user',
      act:'newsbannerread',
      id:$routeParams.id,
      location:'pc',
    },function (jo) {
      $scope.entity=jo.info
    })
  },300)
})
