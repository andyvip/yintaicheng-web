$(document).ready(function(){
    var canvas = $('#firstfloor')[0];
    if(canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if(canvas.webkitRequestFullScreen)
        canvas.webkitRequestFUllScreen();
    else if(canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();

    var canvasCxt = canvas .getContext("2d");
    var img = new Image();
    img.src = "res/firstfloor.jpg";
    canvasCxt.drawImage(img, 0, 0);
})
