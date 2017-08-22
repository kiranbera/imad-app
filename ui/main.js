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


//----------------Counter Code-------------------------
var button = document.getElementById('counter');
//var counter = 0;
button.onclick = function() {
  
    //Create a req obj
    var request = new XMLHttpRequest();
    
    
    //Capture d response & store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Tkae some action
            if(request.status ===200) {
                var counter = request.response.Text;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not Yet Done
    };
    
    
    //Render d variable in d correct span
    /*counter =counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();*/
    
    //Make d req
    request.open('GET', 'http://kiranbera57.imad.hasura-app.io/counter', true);
    request.send(null);
};
   
   
   
   
   