(function(){$(document).ready(function(){var i,n;return i=$("#scene"),i.parallax(),n=function(){var n;return i[0].style.width=window.innerWidth+"px",i[0].style.height=window.innerHeight+"px",n=$("#anim-canvas"),n.height(1297*n.width()/4260),$(".circles").height(1297*n.width()/4260)},n(),window.onresize=n})}).call(this);