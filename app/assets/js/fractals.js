var canvas = $("fractalCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var context = canvas.getContext("2d");
var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
var red = 255 //TODO: Add a colour picker, use splitString to get RGB values
var green = 255
var blue = 255
var alpha = 255
var x = 0
var y = 0
var counter = 50000 //TODO: Read from input box

window.onload = definePoint(x,y);

function defineCorners{
    topPointX = 290
    topPointY = 10
    leftPointX = 10
    leftPointY = 80
    rightPointX = 590
    rightPointY = 80
    addPoint(topPointX,topPointY,red,green,blue,alpha);
    addPoint(leftPointX,leftPointY,red,green,blue,alpha);
    addPoint(rightPointX,tightPointY,red,green,blue,alpha);
    updateCanvas();
}

function definePoint(x,y){
    addPoint(x,y,red,green,blue,alpha);
    x = (x+10)%580
    y = (y+10)%560
    counter = counter-1
    if counter < 1 {
        updateCanvas();
    }
    else {
        updateCanvas();
        definePoint(x,y)
    }
}

function addPoint (x, y, r, g, b, a) { //Define a given pixel to be a given colour
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

function updateCanvas() { //Write changes to canvas
    context.putImageData(canvasData, 0, 0);
}
