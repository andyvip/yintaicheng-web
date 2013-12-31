// $(document).ready(function(){
//     var canvas = $('#firstfloor')[0];
//     var canvasCxt = canvas.getContext("2d");
//     var img = new Image();
//     img.src = "res/firstfloor.jpg";

//     console.log('screen-->' + screen.width + ':' + screen.height);
//     console.log('canvas-->' + canvas.width + ':' + canvas.height);
//     console.log('img-->' + img.width + ':' + img.height);

//     canvas.width = screen.width - 20;
//     canvas.height = screen.height - 30;

//     console.log('canvas-->' + canvas.width + ':' + canvas.height);

//     if (img.width >= img.height) {
//         canvasCxt.save();
//         canvasCxt.scale(canvas.height/img.width, canvas.height/img.width);
//         canvasCxt.translate(img.height/2 + canvas.width/(2*canvas.height/img.width), 0);
//         canvasCxt.rotate(Math.PI/2);
//         canvasCxt.drawImage(img, 0, 0);
//         canvasCxt.restore();
//     }
//     else{
//         canvasCxt.save();
//         canvasCxt.scale(canvas.height/img.height, canvas.height/img.height);
//         canvasCxt.translate(canvas.width/(2*canvas.height/img.height) - img.width/2, 0);
//         canvasCxt.drawImage(img, 0, 0);
//         canvasCxt.restore();
//     }
// })

var scaleX = 0,
    scaleY = 0,
    translateX = 0,
    translateY = 0,
    rotate = 0;

$(document).ready(function(){
    var canvas = $('#firstfloor')[0];
    var canvasCxt = canvas.getContext("2d");
    var img = new Image();
    img.src = "res/firstfloor.jpg";

    console.log('screen-->' + screen.width + ':' + screen.height);
    console.log('canvas-->' + canvas.width + ':' + canvas.height);
    console.log('img-->' + img.width + ':' + img.height);

    canvas.width = screen.width - 20;
    canvas.height = screen.height - 30;

    console.log('canvas-->' + canvas.width + ':' + canvas.height);

    canvasCxt.moveTo(0,0);
    for (var x = 0; x <= canvas.width; x += 20){
        canvasCxt.moveTo(x,0);
        canvasCxt.lineTo(x, canvas.height);
    }
    for (var x = 0; x <= canvas.height; x += 20){
        canvasCxt.moveTo(0, x);
        canvasCxt.lineTo(canvas.width, x);
    }

    canvasCxt.save();
    canvasCxt.scale(canvas.height/img.height, canvas.height/img.height);
    canvasCxt.translate(canvas.width/(2*canvas.height/img.height) - img.width/2, 0);
    canvasCxt.drawImage(img, 20, 20);
    //canvasCxt.restore();

    canvasCxt.moveTo(10*20,4*20);
    canvasCxt.lineTo(8*20,6*20);
    canvasCxt.stroke();
})

$(document).ready(function(){
    $("body").mousemove(function(evt){
        $('#cur').text(evt.pageX + ":" + evt.pageY)
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

        convertedNodeList[i] = new Arry(x, y);
    }
    return convertedNodeList;
}





