var tl = gsap.timeline()
tl.from('#navbar>img, #nav-part2,#nav-part3',{
    y:-100,
    delay:0.5,
    duration:0.5,
    opacity:0,
    stagger:1
})
tl.from('#center-div h1',{
    x:-200,
    opacity:0
})
tl.from('#scroll-button',{
    scale:0,
    opacity:0,
})
tl.to('#scroll-button',{
    y:40,
    repeat:-1,
    duration:1,
    yoyo:true
})
gsap.from('#box',{
   scale:0,
   rotate:360,
   scrollTrigger:{
    trigger:'#page2 #box',
    scroller:'body',
    start:'top 110%',
    end:'top 30%',
    scrub:5,
   }
})


  
