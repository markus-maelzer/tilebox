// loader
window.addEventListener('load', function() {
  setTimeout(function () {
    $('.mainLoader').css({'visibility': 'hidden', 'opacity' : '0'});
  }, 300)

});

$(document).ready(function(){

// Clock Funktion
updateClock()
analogClock()
dayTime();

setInterval(function(){
  updateClock();
  analogClock();
}, 1000);
setInterval(function() {
    dayTime();
}, 60000);


function analogClock() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  }
  var d = new Date()
  r(sec, 6*d.getSeconds())
  r(min, 6*d.getMinutes())
  r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}
function updateClock() {
  var t = new Date();
  var tMin = t.getMinutes();
  var tHour = t.getHours();

  currentMinutes = ( tMin < 10 ? "0" : "" ) + tMin;
  currentHours = ( tHour < 10 ? "0" : "" ) + tHour;

  var currentTimeString = currentHours + ":" + currentMinutes;

  document.getElementById('clockText').innerHTML = currentTimeString;
}



//Grußformel
function dayTime() {
  var random = Math.floor(Math.random() * 5);
  var t = new Date();
  var tMin = t.getMinutes();
  var tHour = t.getHours();

  var curTime = tHour + (tMin/100);
  var greeting;

  if (curTime >=5 && curTime < 11) {
    greeting = "Good Morning";
  }
  else if (curTime >=11 && curTime < 16.3) {
    greeting = "Hi there";
  }
  else if (curTime >=16.3 && curTime < 22) {
    greeting = "Hi there";
  }
  else if (curTime >=22 && curTime < 23.6 || curTime >= 0 && curTime < 5) {
    greeting = "Hi there"
  }
  $(".greeting").html(greeting);
}
// Clock ende

//searchBar
var searchBar = $(".searchBar input")
searchBar.focus(function(){
  $(this).attr("value", "");
  searchBar.select();
});
searchBar.focusout(function() {
  $(this).attr("value", "Google Suche");
});

// iframe stuff

var link = $(".slink");
var wurkPls = 0;
link.click(function(){
  var cur = $(this);
  var curLink = cur.attr("data-link");
  console.log(curLink);
  $(".iframe iframe").on('load', function(){
    if (wurkPls == 0) {
      $(".loader").css({"visibility": "Hidden", "opacity": "0"});
      wurkPls = 1;
    }
  });
  console.log(curLink);
  if (curLink !== "noIframe") {
    setTimeout(function(){
      $(".iframe iframe").attr("src", curLink);
    }, 700);
    $(".iframe").css("top", "-100%");
    $(".animationWrapper").css("top", "-100%");
  }
});

console.log(link);
(function sth() {
  link.each(function () {
    var cur = $(this);
    var curLink = cur.data("link");
    if (curLink.search('https') >= 0) {
      console.log('hi');
      cur.attr('target', '_blank');
      cur.attr('href', curLink);
      cur.attr('data-link', 'noIframe');
    }
  })
})();



// CLOSE IFRAME BUTTON
var closeIframe = $(".exit_iframe");

closeIframe.click(function(){
  setTimeout(function(){
    $(".iframe iframe").attr("src", "");
    $(".loader").css({"visibility": "visible", "opacity": "1"});
    setTimeout(function(){
        wurkPls = 0;
    }, 100);
  }, 700);

  $(".iframe").css("top", "0")
  $(".animationWrapper").css("top", "0");
});
$(".sDown").click(function(){
  $(".iframe").css("top", "-100%");
  $(".animationWrapper").css("top", "-100%");
});

/** login errorhandling
var error = $(".errormessage").length;
if (error > 0){
  $(".login-modal").css({"visibility": "visible", "opacity": "1"});
  $(".signup").toggleClass("visible");
  $(".login").toggleClass("visible");
  $(".login-content h1").toggleClass("visible");
}


// coler palette
var s = 0;
$(".secret").click(function(){
  if (s == 0) {
    $(".palette").css("top","0");
    $(this).css({'top': '40px', 'transform':'rotateX(180deg)'});
    s = 1;
  }else if(s == 1) {
    $(".palette").css("top","-80px");
    $(this).css({'top': '4px', 'transform':'rotateY(0)'});
    s = 0;
  }
});
**/
$(".link").on('click', function () {
  var cur = $(this);
  cur.addClass("hidden");
  setTimeout(function () {
    cur.css('overflow', 'visible');
  }, 200);
})
var myTimout;
$(".link").stop().mouseleave(function () {
  myTimout = setTimeout(function () {
    $(".link").removeClass("hidden");
    $(".link").css('overflow', 'hidden');
  }, 500);
})
$(".link").mouseenter(function () {
  clearTimeout(myTimout);
})

$(".slink").each(function () {
  var tooltip = $(this).data('tooltip');
  if (tooltip == "") {
    $(this).removeAttr('data-tooltip');
  }
})


});
var color = [];
// VIBRANT JS CODE
  var url = $("#hiddenimg").attr('src');
  var img = document.getElementById('hiddenimg');
  img.src = url + '?';//how does this even work?
  img.setAttribute('crossOrigin', 'anonymous');
  console.log(img);

  img.addEventListener('load', function() {
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches()
        var i = 0;
      //  console.log(swatches);
        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
              color.push(swatches[swatch].getHex());
            //  console.log(i);
             console.log(color[i]);
              i++;
          //  console.log(swatch, swatches[swatch].getHex());
          }
        }
    //  console.log("LENGHT: "+color[4]);
      for (var e = 0; e < color.length ; e++) {
        $(".palette div:nth-of-type("+(e+1)+")").css("backgroundColor", color[e]);
        $(".palette div:nth-of-type("+(e+1)+")").attr("data-clipboard-text", color[e]);
        //console.log("color E: "+ color[e]);
        //console.log($(".palette div:nth-of-type("+e+")"));
      }
    setColors();
    setSlinkColor();
  });


function setColors() {
  $("body").css({
    "--main-element-bgr-c4":color[4],
    "--main-element-bgr-hover-c0":color[0],
    "--main-element-border-hover-c1" :color[1],
    "--main-element-text-c0":color[0],
    "--main-loader-bgr-c4":color[4],
    "--main-loader-squares-c0":color[0]
  })
};


function setSlinkColor() {
  var f = 0;
  var e = 0;
  $(".slink").each(function () {
    e += 0.05;
    var cur = $(this);
    var currentColor = color[0];
//    console.log(currentColor);
      $("body").css("--s" + f , shadeBlendConvert(e,String(currentColor)));
//    console.log(shadeBlendConvert(e,String(currentColor)));
    cur.addClass("set");
    f += 1;
  });
}
function shadeBlendConvert(p, from, to) {
    if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(typeof(to)!="string"&&typeof(to)!="undefined"))return null; //ErrorCheck
    if(!this.sbcRip)this.sbcRip=function(d){
        var l=d.length,RGB=new Object();
        if(l>9){
            d=d.split(",");
            if(d.length<3||d.length>4)return null;//ErrorCheck
            RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
        }else{
            if(l==8||l==6||l<4)return null; //ErrorCheck
            if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 digit
            d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=l==9||l==5?r(((d>>24&255)/255)*10000)/10000:-1;
        }
        return RGB;}
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=sbcRip(from),t=sbcRip(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)*0x1000000+r((t[0]-f[0])*p+f[0])*0x10000+r((t[1]-f[1])*p+f[1])*0x100+r((t[2]-f[2])*p+f[2])).toString(16).slice(f[3]>-1||t[3]>-1?1:3);
}
