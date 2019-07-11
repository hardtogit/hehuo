iweb.controller('i101', function($scope,$routeParams) {
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

})
