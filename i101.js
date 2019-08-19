iweb.controller('i101', function($scope,$routeParams) {
  $scope.entity={}
  setTimeout(function () {
    if($routeParams.type==='1'){
      setTimeout(function () {
        $(window).scrollTop(0)
      },1000)
    }
    if($routeParams.type==='2'){
      setTimeout(function () {
        $(window).scrollTop($('#two').offset().top)
      },1000)
    }
    if($routeParams.type==='3'){
      setTimeout(function () {
        $(window).scrollTop($('#three').offset().top)
      },1000)
    }
    if($routeParams.type==='4'){
      setTimeout(function () {
        $(window).scrollTop($('#four').offset().top)
      },1000)

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
