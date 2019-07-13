iweb.controller('i103', function($scope,$routeParams) {
  $scope.detail=$routeParams.detailId?true:false
  $scope.detailId=$routeParams.detailId?parseInt($routeParams.detailId):1
  $scope.goDetail=function(id){
    $(window).scrollTop(0)
    $scope.detail=true;
    $scope.detailId=id
  }
  $scope.close=function () {
    $scope.detail=false
  }

})
