var fullstate = false;
$(document).ready(function(){
    var canvas = $('#firstfloor')[0];
    var canvasCxt = canvas.getContext("2d");
    var img = new Image();
    img.src = "res/firstfloor.jpg";

    // console.log('screen-->' + screen.width + ':' + screen.height);
    // console.log('canvas-->' + canvas.width + ':' + canvas.height);
    // console.log('img-->' + img.width + ':' + img.height);

    canvas.width = screen.width - 20;
    canvas.height = screen.height - 30;

    //console.log('canvas-->' + canvas.width + ':' + canvas.height);

    if (img.width >= img.height) {
        canvasCxt.save();
        canvasCxt.scale(canvas.height/img.width, canvas.height/img.width);
        canvasCxt.translate(img.height/2 + canvas.width/(2*canvas.height/img.width), 0);
        canvasCxt.rotate(Math.PI/2);
        canvasCxt.drawImage(img, 0, 0);
        canvasCxt.restore();
    }
    else{
        canvasCxt.save();
        canvasCxt.scale(canvas.height/img.height, canvas.height/img.height);
        canvasCxt.translate(canvas.width/(2*canvas.height/img.height) - img.width/2, 0);
        canvasCxt.drawImage(img, 0, 0);
        canvasCxt.restore();
    }
})



$(document).ready(function(){
    $('#firstfloor').click(function(){
        if (fullstate) {
            exitFullScreen();
        }
        else{
            makeFullSceen(this);
        }
    })  
})



function drawPath(nodeList){
    var canvas = $('#firstfloor')[0];
    var canvasCxt = canvas.getContext("2d");
    var convertedNodeList = pointConvert(nodeList);

    canvasCxt.moveTo(convertedNodeList[0][0], convertedNodeList[0][1]);

    for (var i = convertedNodeList.length - 1; i >= 1; i--) {
        canvasCxt.lineTo(convertedNodeList[i][0], convertedNodeList[i][1]);
    }
    canvasCxt.stroke();
}

function pointConvert(nodeList){
    var convertedNodeList =  new Array();

    for (var i = 0; i < nodeList.length; i++) {
        var x = nodeList[i][0];
        var y = nodeList[i][1];
        //............

        convertedNodeList[i] = new Array(x, y);
    }
    return convertedNodeList;
}


function makeFullSceen(elem){
    if(elem.requestFullScreen){
        elem.requestFullScreen();
    }
    if(elem.msRequestFullScreen){
        elem.msRequestFullScreen();
    }
    else if(elem.webkitRequestFullScreen){
        elem.webkitRequestFUllScreen();
    }
    else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }
    else{
        console.log("fullscreen is not supported");
        return;
    }
    fullstate = true;
    return;
}


function exitFullScreen(){
    if (document.exitFullScreen){ 
        document.exitFullScreen();
    }
    else if(document.msExitFullScreen){
        document.msExitFullScreen();
    }
    else if(document.mozCancelFullScreen){
        document.mozCancelFullScreen();
    }
    else if(document.webkitCancelFullScreen){
        document.webkitCancelFullScreen();
    }
    else{
        console.log("can't exit fullscreen");
        return;
    }
    fullstate = false;
    return;
}




