canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var carwidth=100;
var carheight=90;
backgroundimage="racing.jpg";
carimage="car1.png";
carx=10;
cary=10;
c2y=100;
c2x=10;
car2image="car2.jpg"
function add(){
    bgimage=new Image();
    bgimage.onload=uploadbackground;
    bgimage.src=backgroundimage;
    cimage=new Image();
    cimage.onload=uploadcar;
     cimage.src=carimage;
     c2image=new Image();
     c2image.onload=uploadcar2;
     c2image.src=car2image;
}
function uploadbackground(){
    ctx.drawImage(bgimage,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(cimage,carx,cary,carwidth,carheight);
}
function uploadcar2(){
    ctx.drawImage(c2image,c2x,c2y,carwidth,carheight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypress=e.keyCode;
    console.log(keypress);
    
    
    
    if(keypress=="37"){
        left();
    }
    if(keypress=="39"){
        right();
    }
    if(keypress=="65"){
        leftcar2();
    }
    if(keypress=="68"){
        rightcar2();
    }
}


    
    function left(){
        if(carx>=0){
            carx=carx-10;
            uploadbackground();
            uploadcar();
            
    
        
    }
}
function right(){
    if(carx<=800){
        carx=carx+10;
        uploadbackground();
        uploadcar();
        

    }
}
function leftcar2(){
    if(c2x>=0){
        c2x=c2x-10;
        uploadbackground();
        uploadcar2();
        

    
}
}
function rightcar2(){
if(c2x<=800){
    c2x=c2x+10;
    uploadbackground();
    uploadcar2();
    

}
}