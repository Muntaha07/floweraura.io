function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()
 
var tl = gsap.timeline ()
tl
.from("#nav h1, img, #navpart2 h2",{
  y:-100,
  duration:1,
  delay:0.2,
  stagger:0.3,
},"a")
.from("#text h1",{
x:"-100%",
  opacity:0,
  stagger:0.4,
  delay:1.8
},"a")
.from("#image1",{
  scale:0,
  delay:2.7,
  opacity:0,
},"a")

var tl2 =gsap.timeline({
  scrollTrigger:{
  scroller:"#main",
  trigger:"#page2",
  start:"top 0%",
  end:"top -120%",
  // markers:true,
  pin:true,
  scrub:2,
  }
})
tl2
.from("#image2",{
top:"-100%",

},"b")
.from("#image3",{
  bottom:"-100%"

},"b")
.to("#page2>h2",{
  delay:-0.1,
  opacity:1,
  scale:1,
  onStart: function(){
    $('#page2>h2').textillate({ in: { effect: 'bounceIn' } }); 
  }
})


gsap.from("#page4>video",{
scale: 0,

opacity:0,
scrollTrigger:{
  trigger:"#page4",
  scroller:"#main",
  // markers:true,
  start:"top -50%",
  end:"top 0%",
  scrub:3,
}

})


function textLogo(){
var flowerName  = document.querySelectorAll(".flowername")
flowerName.forEach(function(e){
  var img = e.childNodes[3]



  e.addEventListener("mouseenter",function(){
gsap.to(img,{
opacity:1,
transform:"translate(-50%)",
})

  })
  e.addEventListener("mouseleave",function(){
gsap.to(img,{

opacity:0,
transform: "translate(-50%)"
})

  })
  e.addEventListener("mousemove",function(dets){

    e.childNodes[3] .style.left =dets.x+"px"
    e.childNodes[3] .style.top =dets.y-"px"

  // gsap.to(img,{
  //   left:dets.x,
  //   top:dets.y,
  // })
  })
});
}
textLogo()
function speedText(){
var para =document.querySelectorAll("#para h3")
para.forEach(function(elem){
var textCont = elem.textContent
var splt =textCont.split("")
var clutter =" "
splt.forEach(function(e){
clutter+=`<span>${e}</span>`
})
elem.innerHTML=clutter
});
}
speedText()
gsap.to("#page3 #para h3 span",{

color:"#000",
stagger:1.5,
scrollTrigger:{
  trigger:"#page3",
  scroller:"#main",
  start:"top 0%",
  end:"top -100%",
  scrub:3,
  pin:true,
  // markers:true,
}
})
function footer(){
  var foot =gsap.timeline({
    scrollTrigger:{
      trigger:"#one",
      scroller:"#main",
      start:"top 70%",
      end:"top 70%",
      scrub:3,
      pin:true,
      // markers:true,
    }
  })
   foot
  .from("#one h1",{
    y:-100,
    opacity:1,
  
   })
   .from("#footer p",{
    opacity:0,
    // delay:0.3,
    onStart: function(){
      $('#footer p').textillate({ in: { effect: 'fadeIn' }}); 
    }
  
   })
}
footer()