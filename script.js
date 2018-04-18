function setup(){   
    createCanvas(1900,900);
    background("#acacac");
}
function mouseDragged(){
    noStroke();
    fill(200,0,0);
    ellipse(mouseX,mouseY,25,25);
}
function main() {
    var socket = io.connect('http://localhost:3000');
    var canvas = document.getElementById('defaultCanvas0');
    var input = document.getElementById('ellipse');

    function handleClick(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("add ellipse", val);
        }
    }
   onclick = handleClick;
}
    
 