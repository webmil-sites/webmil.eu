(function(){$.fn.scrollMagicArchAnim=function(){var e,n,o,a,i,r;return e=new ScrollMagic.Controller,r=(new TimelineMax).fromTo(".top-backgroud-container",1,{backgroundPosition:"center 0px"},{backgroundPosition:"center -300px",ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".top-backgroud-container",triggerHook:0,duration:$(window).height()}).setTween(r).addTo(e),i=(new TimelineMax).fromTo(".arch-main-logo",1,{"margin-top":"-32px",backgroundSize:"100% 100%"},{"margin-top":"-64px",backgroundSize:"80% 80%",ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:"body",triggerHook:0,duration:$(window).height()}).setTween(i).addTo(e),a=(new TimelineMax).fromTo(".a-line span",1,{height:0},{height:"100%",ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".arch-macbook",reverse:!1}).setTween(a).addTo(e),o=(new TimelineMax).fromTo(".arch-iphone-screen-1",.15,{top:"41px"},{top:"-46px",ease:Linear.easeNone}).fromTo(".arch-iphone-screen-2",.15,{top:0},{top:"-88px",ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".arch-mobile-back"}).setTween(o).addTo(e),n=(new TimelineMax).fromTo(".arch-iphone-base span",.3,{height:0},{height:"175px",ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".arch-mobile-back"}).setTween(n).addTo(e)},$(function(){if(windowWidth>960&&$("body").hasClass("archimatika"))return $.fn.scrollMagicArchAnim()})}).call(this);