iweb.controller('i100', function($scope,$routeParams) {
  $scope.entity={}
  $scope.news={}
  $scope.goDetail=function(id){
    $(window).scrollTop(0)
    goto_view('i107?id='+id)
  }
    if($(window).width()>993) {
      $('.swiper-banner-container img').css('height',$(window).height()-100+'px')
      if($(window).width()<1200){
        $('.swiper-banner-container img').css('height',$(window).height()-72+'px')
      }
      $(function () {
        $('.section').css('height',$(window).height())
        setTimeout(function () {
          $('#fullpage').fullpage({
            scrollBar: true,
            // autoScrolling:false,
            onLeave: function (index, nextIndex, direction) {
              if (nextIndex !== 1&&nextIndex!==7) {
                $('.headerNav').css('top', '-101px')
              } else {
                $('.headerNav').css('top', '0')
              }
              if(nextIndex !==7){
                $('.footer').css('bottom','-100px')
              }else{
                $('.footer').css('bottom',0)
              }
            },
            lazyLoading: false,
            loopHorizontal:false,
            recordHistory:false
          });
          AOS.init({
            duration: 1200,
            offset:0
            // debounceDelay:10000
          });
        },0)
        })
      setTimeout(function () {
        window.ajax({
          obj:'user',
          act:'homeread',
          location:'pc'
        },function (jo) {
          $scope.entity=jo.info
          setTimeout(function () {
            var mySwiper = new Swiper('.swiper-container', {
              slidesPerView: 8,
              spaceBetween: 5,
              freeMode:true,
              // autoplay:true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            });
            $scope.slideNext=function(){
              mySwiper.slideNext()
            }
            $scope.slidePrev=function(){
              mySwiper.slidePrev()
            }
            var myBannerSwiper = new Swiper('.swiper-banner-container', {
              // freeMode:true,
              autoplay:true,
              delay:5000,
              setWrapperSize :true,
              loop:true,
              height:300
            });
          },0)
        })
      },300)
    }else{
      setTimeout(function () {
        window.ajax({
          obj: 'user',
          act: 'homeread',
          location: 'pc'
        }, function (jo) {
          $scope.entity = jo.info
          setTimeout(function () {
            var mySwiper = new Swiper('.swiper-container', {
              slidesPerView: 4,
              spaceBetween: 5,
              freeMode: true,
              // autoplay:true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            });
            $scope.slideNext = function () {
              mySwiper.slideNext()
            }
            $scope.slidePrev = function () {
              mySwiper.slidePrev()
            }
            var myBannerSwiper = new Swiper('.swiper-banner-container', {
              // freeMode:true,
              autoplay: true,
              delay: 5000,
              setWrapperSize: true,
              loop: true,
              height: 300
            });
          },0)
        })
      })
    }
  $scope.goLink=function (item) {
    if(item.link){
      window.open(item.link,'_blank')
    }
  }
  function debounce(fn,wait){
    var timer = null;
    return function(){
      clearTimeout(timer)
      timer = setTimeout(function(){
        fn()
      },wait)
    }
  }
  var getNews=function (page_num) {
    window.ajax({
      obj:'user',
      act:'newsread',
      page_num:page_num,
      page_size:5,
      home:'是',
    },function (jo) {
      $scope.news=jo.info
    })
  }
  setTimeout(function () {
    getNews(0)
  },300)
})
