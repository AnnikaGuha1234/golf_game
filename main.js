canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ball_x=10;
ball_y=10;
ball_image="ball.webp";
Background_image="istockphoto-452188553-1024x1024.jpg";
ball_width=90;
ball_height=100;
function add(){
    Background_imgTag = new Image();
    Background_imgTag.onload= uploadBackground();
    Background_imgTag.src=Background_image;

    ball_imgtag= new Image();
    ball_imgtag.onload=uploadball();
    ball_imgtag.src=ball_image;

}
function uploadBackground(){
    ctx.drawImage(Background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadball(){
ctx.drawImage(ball_imgtag,ball_x,ball_y,ball_width,ball_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode
    console.log("KeyPressed");
if (keyPressed == 38)
{
    up();
    console.log("up");
}
if (keyPressed==40){
down();
console.log("down");
}
if (keyPressed==37){
left();
console.log("left");
}
if (keyPressed==39){
right();
console.log("right");
}
}
function up(){

    if(ball_y >0){
        ball_y -=10;
        console.log("when up arrow key is pressed x = " + ball_x + ball_y);
uploadBackground();
    uploadball();

    }
}
function down(){
    if(ball_y <=500){
        ball_y +=10;
        console.log("when down arrow key is pressed  x =" + ball_x + "y="+ ball_y);
        uploadBackground();
        uploadball();
    }
}
function left(){
    if(ball_x >=0){
        ball_x -=10;
        console.log("when left arrow key is pressed  x =" + ball_x + "y="+ ball_y);
        uploadBackground();
        uploadball();
    }
}
function right(){
    if(ball_x <=700){
        ball_x +=10;
        console.log("when right arrow key is pressed  x =" + ball_x + "y="+ ball_y);
        uploadBackground();
        uploadball();
    }
}