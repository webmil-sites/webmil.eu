(function(){$.fn.scrollMagicWarmAnim=function(){var e,i,a,n,o;return e=new ScrollMagic.Controller,o=(new TimelineMax).fromTo(".warm-el-first .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".warm-el-first .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".warm-el-second .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".warm-el-second .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".warm-el-third .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".warm-el-third .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".warm-el-fourth .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone,delay:.2}).fromTo(".warm-el-fourth .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".warm-el-fifth .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".warm-el-fifth .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".warm-el-sixth .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".warm-el-sixth .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}).fromTo(".warm-el-seventh .line-anim",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".warm-el-seventh .element-image",.5,{width:0,height:0,opacity:0},{width:"100%",height:"100%",opacity:1,ease:Back.easeOut.config(1.7)}),new ScrollMagic.Scene({triggerElement:".warm-home-page-container"}).setTween(o).addTo(e),i=(new TimelineMax).fromTo(".corporate-id-anim-container .ring-1",.3,{transform:"scale(0)",opacity:0},{transform:"scale(1)",opacity:1,ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-1 .line-inverted",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-2",.3,{transform:"scale(0)",opacity:0},{transform:"scale(1)",opacity:1,ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-2 .line-inverted",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-3",.3,{transform:"scale(0)",opacity:0},{transform:"scale(1)",opacity:1,ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-3 .line-inverted",.3,{height:0},{height:"100%",ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-4",.3,{transform:"scale(0)",opacity:0},{transform:"scale(1)",opacity:1,ease:Linear.easeNone}).fromTo(".corporate-id-anim-container .ring-4 .line-inverted",.3,{height:0},{height:"100%",ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".warm-corporate-id-container"}).setTween(i).addTo(e),a=(new TimelineMax).fromTo(".landing.screenshot1",.5,{left:"-46%",opacity:0},{left:"7.4%",opacity:1,ease:Linear.easeNone}).fromTo(".landing.screenshot3",.5,{left:"-46%",opacity:0},{left:"17.76%",opacity:1,ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".warm-landing-page-container"}).setTween(a).addTo(e),n=(new TimelineMax).fromTo(".landing.screenshot2",.5,{right:"-46%",opacity:0},{right:"10.7%",opacity:1,ease:Linear.easeNone}).fromTo(".landing.screenshot4",.5,{right:"-46%",opacity:0},{right:"22.66%",opacity:1,ease:Linear.easeNone}),new ScrollMagic.Scene({triggerElement:".warm-landing-page-container"}).setTween(n).addTo(e)},$(function(){if(windowWidth>960&&$("body").hasClass("warm_city"))return $.fn.scrollMagicWarmAnim()})}).call(this);