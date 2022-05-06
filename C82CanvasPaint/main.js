var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var color= "black";
width_of_line= 1;
canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("lineWidth").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientX-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last_position_of_x and last_position_of_y=");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    
    console.log("currentposition_of_x and currentposition_of_y=");
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}