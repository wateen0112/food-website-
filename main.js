addEventListener('scroll',function(){
  var header = document.querySelector('header');

  header.classList.toggle('scrolled',window.scrollY>0); 

})
var menuToggle=function(){
  const menuToggle = document.querySelector('.menu-toggle');
}
var toggle = document.querySelector('.toggle');
toggle.addEventListener('click',function(){
{
 
 
  var header = document.querySelector('header');
  var navigator = document.querySelector('.this');

navigator.classList.toggle('navigator');
navigator.classList.toggle('dropdownmenu');
header.classList.toggle('dropdownlist');



}});
var menuBtn = document.querySelector('header ul').children;
for(var i =0 ; i<menuBtn.length;i++){
  menuBtn[i].addEventListener('click',function(){
    var navigator = document.querySelector('.this');
    var header = document.querySelector('header');
    
    navigator.classList.add('navigator');
    navigator.classList.remove('dropdownmenu');
    header.classList.remove('dropdownlist');
  });
  
}