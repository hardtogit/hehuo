iweb.controller('i103', function($scope,$routeParams) {
  $scope.entity={}
  $scope.detail=$routeParams.detailId?true:false
  $scope.detailId=$routeParams.detailId?parseInt($routeParams.detailId):1
  $scope.goDetail=function(id){
    $(window).scrollTop(0)
    goto_view('i107?id='+id)
  }
  $scope.close=function () {
    $scope.detail=false
  }
  var getNews=function (page_num) {
    window.ajax({
      obj:'user',
      act:'newsread',
      page_num:page_num,
      page_size:5,
      home:'否',
    },function (jo) {
      $scope.news=jo.info
      var data=jo
      PageObject({appendId:'i004page',currNum:page_num+1,pageCount:Math.ceil(data.count/5),callback:function (current) {
          getNews(current-1)
        }})
    })
  }
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'newsbannerread',
      location:'pc',
    },function (jo) {
      $scope.entity=jo.info
    })
    getNews(0)
  },300)
})
