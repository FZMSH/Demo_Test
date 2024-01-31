function move() {
    var elem = document.getElementById("progress"); 
    var elem2= document.getElementById("per"); 
    var width = 0;
    var id = setInterval(function frame(){
     if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem2.innerHTML = width * 1  + '%';
      }
    
    },18);
    
  }
  
 
 var tl = gsap.timeline()

 tl.to('#per0',{
    x:'400',
    duration:'2',
    scrub:1
 })
 tl.to(move())