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

    canvasCxt.moveTo(0,0);
    for (var x = 0; x <= canvas.width; x += 20){
        canvasCxt.moveTo(x,0);
        canvasCxt.lineTo(x, canvas.height);
    }
    for (var x = 0; x <= canvas.height; x += 20){
        canvasCxt.moveTo(0, x);
        canvasCxt.lineTo(canvas.width, x);
    }

    // if (img.width >= img.height) {
    //     canvasCxt.save();
    //     canvasCxt.scale(canvas.height/img.width, canvas.height/img.width);
    //     canvasCxt.translate(img.height/2 + canvas.width/(2*canvas.height/img.width), 0);
    //     canvasCxt.rotate(Math.PI/2);
    //     canvasCxt.drawImage(img, 0, 0);
    //     //canvasCxt.restore();
    // }
    // else{
    //     canvasCxt.save();
    //     canvasCxt.scale(canvas.height/img.height, canvas.height/img.height);
    //     canvasCxt.translate(canvas.width/(2*canvas.height/img.height) - img.width/2, 0);
    //     canvasCxt.drawImage(img, 0, 0);
    //     //canvasCxt.restore();
    // }

    canvasCxt.drawImage(img, 0, 0);
    // canvasCxt.moveTo(9*20,3*20);
    // canvasCxt.lineTo(7*20,5*20);
    canvasCxt.stroke();

    //  getPath("A", "F", function(data){
    //     console.log(data)
    //     drawPath(data)
    // })
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

    for (var i = 0; i < convertedNodeList.length; i++) {
        canvasCxt.lineTo(convertedNodeList[i][0], convertedNodeList[i][1]);
    }
    canvasCxt.stroke();
}

function pointConvert(nodeList){
    var convertedNodeList =  new Array();

    for (var i = 0; i < nodeList.length; i++) {
        var x = nodeList[i][0] * 20;
        var y = nodeList[i][1] * 20;
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




