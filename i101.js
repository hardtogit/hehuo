iweb.controller('i101', function($scope,$routeParams) {
  $scope.entity={}
  setTimeout(function () {
    if($routeParams.type==='1'){
      $(window).scrollTop(0)
    }
    if($routeParams.type==='2'){
      $(window).scrollTop($('#two').offset().top)
    }
    if($routeParams.type==='3'){
      $(window).scrollTop($('#three').offset().top)
    }
    if($routeParams.type==='4'){
      $(window).scrollTop($('#four').offset().top)
    }
  },0)
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'companyread',
      location:'pc'
    },function (jo) {
      $scope.entity=jo.info
    })
  },300)



})
