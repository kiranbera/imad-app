/*console.log('Loaded!');


var element =document.getElementById('main-text');

element.innerHTML ='New Value';

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 3;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};*/


//Counter Code
var button = document.getElementById('counter');
var counter = 0;


button.onclick = function() {
  
    //Make a req to d counter endpoint
    
    //Capture d response & store it in a variable
    
    //Render d variable in d correct span
    counter =counter+1;
    var sapn = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
   