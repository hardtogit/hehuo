iweb.controller('header', function($scope,$routeParams) {
  $(window).scrollTop(0)
  $scope.factoryTitle=[{}]
  $(function () {
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
  if($(window).width()>993) {
    $('.dropdown').on('mouseover',function () {
      $($(this).find('.dropdown-menu')[0]).css('display','block')
    }).on('mouseout',function () {
      $($(this).find('.dropdown-menu')[0]).css('display','none')
    })
  }else{
      $('.arrow-menu').on('click',function (e) {
        e.stopPropagation()
        if($(this).parents('.dropdown').hasClass('open')){
          $('.dropdown').removeClass('open')
          $(this).removeClass('up')
          $(this).parents('.dropdown').removeClass('open')
        }else{
          $('.dropdown').removeClass('open')
          $(this).addClass('up')
          $(this).parents('.dropdown').addClass('open')
        }
      })

    // $('.headerNav').on('click','.arrow-menu',function (e) {
    //   e.stopPropagation()
    //   if($(this).parents('.dropdown').hasClass('open')){
    //     $('.dropdown').removeClass('open')
    //     $(this).parents('.dropdown').removeClass('open')
    //   }else{
    //     $('.dropdown').removeClass('open')
    //     $(this).parents('.dropdown').addClass('open')
    //   }
    // })


  }


  })
  setTimeout(function () {
    window.ajax({
      obj:'user',
      act:'factorread',
      location:'pc'
    },function (jo) {
         $scope.factoryTitle=jo.info.ftymanage
    })
  },300)
})
