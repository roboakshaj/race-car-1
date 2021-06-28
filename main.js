canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


rover_width=100;
rover_height=90;
background_image="background.jpg";
rover="car1.png";
rover1="car1.png";
rover_x=10;
rover_y=10;
rover1_x=10;
rover1_y=20;

function add(){
 background_image2=new Image();
 background_image2.onload=uploadbackground;
 background_image2.src=background_image;

 
 rover2=new Image();
 rover2.onload=uploadrover;
 rover2.src=rover;

}

function uploadbackground(){
    ctx.drawImage(background_image2,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover2,rover_x,rover_y,rover_width,rover_height);
}
