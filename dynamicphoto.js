var data=[
    {name:'Mohmina', src:'https://images.pexels.com/photos/6934325/pexels-photo-6934325.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name:'Harshita', src:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name:'Fardin', src:'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name:'Ashiq', src:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}

]
var pers='';
data.forEach(function(elem){
    pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h3>${elem.name}</h3>
</div>`
})
document.querySelector('.people').innerHTML=pers;