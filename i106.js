iweb.controller('i106', function($scope,$routeParams) {
  $scope.entity={}
  $scope.openLeft=function(){
    window.open($scope.entity.leftUrl,'_blank')
  }
  $scope.openRight=function(){
    window.open($scope.entity.rightUrl,'_blank')
  }
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'joinread',
      location:'pc',
    },function (jo) {
      $scope.entity=jo.info
    })
  },300)
})
