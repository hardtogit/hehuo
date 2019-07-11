iweb.controller('i100', function($scope,$routeParams) {

    if($(window).width()>993) {
      console.log('sssssssss');
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
                $('.footer').css('bottom','-200px')
              }else{
                $('.footer').css('bottom',0)
              }
            },
            lazyLoading: false,
            loopHorizontal:false,
            recordHistory:false
            // afterRender: function(){
            //   var pluginContainer = $(this);
            //   alert("The resulting DOM structure is ready");
            // }
            // afterLoad: function(anchorLink, index){
            //     alert(index)
            // },
          });
          AOS.init({
            duration: 1200,
            offset:0
            // debounceDelay:10000
          });
        },0)
        })

      // })

    }
  function debounce(fn,wait){
    var timer = null;
    return function(){
      clearTimeout(timer)
      timer = setTimeout(()=>{
        fn()
      },wait)
    }
  }
    $(window).resize(
      debounce(function () {
        window.location.reload()
      },600)
)
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



})
