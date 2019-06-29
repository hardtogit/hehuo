iweb.controller('i100', function($scope,$routeParams) {
    // setTimeout(()=>{
    //     $('body,html').scrollTop(0);
    // },0)

    // $(window).resize(function(){
    //     if($(window).width()>993){
    //         if(typeof $.fn.fullpage.destroy==='function'){
    //             return
    //         }
    //         $('#fullpage').fullpage({
    //             scrollBar:true,
    //             onLeave: function(index, nextIndex, direction){
    //                 if(nextIndex!==1||nextIndex!==7){
    //                     $('.headerNav').css('top','-100px')
    //                 }else{
    //                     $('.headerNav').css('top','0')
    //                 }
    //             },
    //         });
    //     }else{
    //         if($.fn.fullpage.destroy){
    //             $.fn.fullpage.destroy('all');
    //         }
    //
    //     }
    // })

    if($(window).width()>993) {
      $(function () {
        $('#fullpage').fullpage({
          scrollBar: true,
          onLeave: function (index, nextIndex, direction) {
            if (nextIndex !== 1&&nextIndex!==7) {
              $('.headerNav').css('top', '-100px')
            } else {
              $('.headerNav').css('top', '0')
            }
            if(nextIndex !==7){
              $('.footer').css('bottom','-200px')
            }else{
              $('.footer').css('bottom',0)
            }
          },
          lazyLoading: true,
          // afterRender: function(){
          //   var pluginContainer = $(this);
          //   alert("The resulting DOM structure is ready");
          // }
          // afterLoad: function(anchorLink, index){
          //     alert(index)
          // },
        });
      })

    }

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 8,
        spaceBetween: 5,
        freeMode:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


})
