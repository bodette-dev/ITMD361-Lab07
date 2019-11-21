function init(){
//add your javascrip between these two lines of code
 var input = document.getElementById('entryinput');
 var output = document.getElementById('textoutput');
 var button = document.getElementById('entrybutton');
 
 button.addEventListener('click',function() {
  alert('Blake Odette: '+input.value);
 });
 
 button.addEventListener('click',function() {
  output.innerHTML = input.value;
 });
} 
window.addEventListener('load', init);
