

$(document).ready(function () {




     var preloader = gsap.timeline();
          preloader.call(progress);
         preloader.to('.letter ' , {
              visibility: 'visible',
              opacity:1,
              stagger: {
                   each: .2,
                   from: 'start',
                   amount :.5
              }
         })
     preloader.to('.preloader', {
          height:0
     })
     preloader.fromTo('.first-content  p', 2, {
          
          y: '100px',
          visibility: 'hidden',
          
     
     },{
          
        
          y: 0,
          visibility:'visible',
           ease: Power3.easeInOut ,
           
              stagger: {
                   each: .7,
                   from: 'start',
                   amount: .3,
                
          },
                 duration:2,

     })
  
     
     function progress() {
        //  $(".preloader_title").css("opacity", 0);
         $(".preloader_title").addClass("progress_bar")
   }
 

  
     $('.btn-menu').click(function (e) { 
         
         
            var openmenu = gsap.timeline();
        openmenu.call(fm);
     
     openmenu.to('.info-box', {
          
          y: 0,
          visibility: 'visible',
           
     },'+=.5')
     openmenu.to('.menu-box', {
          
          y: 0,
          opacity:1,
           
     },'-=.3')
     openmenu.to('.close-btn', {
          
          visibility:'visible',
          opacity:1,
           
     },'-=.3')
        
     });


    function fm() {
        //  $(".preloader_title").css("opacity", 0);
          $('.menu-canvas').addClass('menu-open');
          $('.menu-canvas').addClass('openacc');
   }

     function cl() {
   
     $('.menu-canvas').removeClass('menu-open');
   }
     function cl2() {
   
     $('.menu-canvas').removeClass('openacc');
   }




     $('.close-btn').click(function (e) { 
         
    var closemenu = gsap.timeline();
        closemenu.call(cl);
        
     closemenu.to('.info-box', {
          
          y: 100,
          visibility: 'hidden',
           
     },'+=.5')
     closemenu.to('.menu-box', {
          
          y: -100,
          opacity:0,
           
     },'-=.8')
     closemenu.to('.close-btn', {
          
          visibility:'hidden',
          opacity:0,
           
     },'-=.8')
          closemenu.call(cl2);
        
     });
 
  

     
     
     
     // var menuFlag = true
     // var top = false 
     // $('.menu-bar').click(function (e) { 
          

     //      if (menuFlag) {

     //            $(".navigation-menu").addClass("open")

     //           // gsap.to('.menu-bar', { rotateZ: '90deg', y: '5px' })
     //           // gsap.to('.menu-line-1', { rotateZ: '40deg', width: '80%', x: 0 , y :"-5"})
     //           // gsap.to('.menu-line-2' , {opacity : 0})
     //           // gsap.to('.menu-line-3', { rotateZ: '-40deg', width: '80%', x: 0, y: '-4' })
              
     //           var menuItems = gsap.timeline();
     //           menuItems.to('.menu-canvas', {
     //                top: '0', duration: 1 ,
     //           });
     //           menuItems.to('.menu-canvas li ' , {
     //                opacity: 1,
     //                 y : 0 ,
     //                stagger: {
     //                     each: 1,
     //                     from: 'start',
     //                     amount :1 
     //                }
     //           })
     //           // menuItems.to('.menu-canvas .second-menu li ' , {
     //           //      opacity: 1,
     //           //       y : 0 ,
     //           //      stagger: {
     //           //           each: 1,
     //           //           from: 'edge',
     //           //           amount :1 
     //           //      }
     //           // })
     //           menuFlag = false;
     //           top = !top;
     //           return
     //      } else {

     //               $(".navigation-menu").removeClass("open")
     //           //    gsap.to('.menu-bar', { rotateZ: '0deg', y: '5px' })
     //           // gsap.to('.menu-line-1', { rotateZ: '0deg', width: '70%', x: 0 , y :"0"})
     //           // gsap.to('.menu-line-2' , {opacity : 1})
     //           // gsap.to('.menu-line-3', { rotateZ: '0deg', width: '40%', x: 0, y: '0' })


     //           if (top) {

     //               var menuItems = gsap.timeline();
              
     //                menuItems.to('.menu-canvas li ', {
     //                     opacity: 0,
     //                      y : '-10px' ,
     //                     stagger: {
     //                          each: 1,
     //                          from: 'end',
     //                          amount: 1
     //                     }
     //                });
     //                 menuItems.to('.menu-canvas', {
     //                top: '150%', duration: 1
     //           });


     //           //   gsap.to('.menu-canvas', { top: '100%'  ,duration : 1 }); 
     //           } else {

     //                var menuItems = gsap.timeline();
              
     //                menuItems.to('.menu-canvas li ', {
     //                     opacity: 0,
     //                     y: '-10px' ,
     //                     stagger: {
     //                          each: 1,
     //                          from: 'end',
     //                          amount: 1
     //                     }
     //                });
     //                 menuItems.to('.menu-canvas', {
     //                top: '-150%', duration: 1
     //           });

     //           //     gsap.to('.menu-canvas', { top: '-100%'  ,duration : 1 });  
     //           }
     //           menuFlag = true 
             
     //      }

        
          
     // });



     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // $(".logo-box").removeClass("logo-about")
               
        $("header").addClass("down-scroll")
               
    } else {
        $("header").removeClass("down-scroll")

}
    
    window.onscroll = function () {
        scrollFunction()
       
};
   
    function scrollFunction() {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            // $(".logo-box").removeClass("logo-about")
               
                 $("header").addClass("down-scroll")
               
        } else {
             $("header").removeClass("down-scroll")

        }
    }

});