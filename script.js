var socket = io.connect('http://localhost:3000');
function setup() {
    createCanvas(1900, 900);
    background('#acacac');
}
function mouseDragged() {
    socket.emit('coords to server', [mouseX, mouseY]);
}

socket.on("sending coords", drawEllipse);

function drawEllipse(data) {

    noStroke();
    fill('blue');
    ellipse(data[0], data[1], 25,25);

}

