iweb.controller('header', function($scope,$routeParams) {
  $(window).scrollTop(0)
      var path=window.location.href
     var arr=$('.navbar-nav>li>a')
     if($.fn.fullpage.destroy&&path.indexOf('i100')===-1){
       $.fn.fullpage.destroy('all');
     }
      arr.each(function (index,item) {
        if(path.indexOf($(item).attr('data-href'))!==-1){
          $(item).addClass('active')
        }
      })
})
