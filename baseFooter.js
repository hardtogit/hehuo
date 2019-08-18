iweb.controller('baseFooter',function($scope,$rootScope,$routeParams) {
  $scope.showBack=false
  // $scope.showBack=false
  function debounce(fn,wait){
    var timer = null;
    return function(){
      clearTimeout(timer)
      timer = setTimeout(function(){
        fn()
      },wait)
    }
  }
  $scope.scrollToTop=function(){
    $(window).scrollTop(0)
  }
  $(window).on('scroll',debounce(function () {
    console.log($(window).scrollTop())
    if(parseInt($(window).scrollTop())>900){
    $scope.showBack=true
    }else{
      $scope.showBack=false
    }
    $scope.$apply()
  },100))
})
