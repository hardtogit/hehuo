iweb.controller('i106', function($scope,$routeParams) {
  $scope.entity={}
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
