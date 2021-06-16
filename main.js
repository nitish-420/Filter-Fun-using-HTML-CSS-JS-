var image=null ;
var realimg=null;
function upload(){
 var img=document.getElementById("img");
  var canv=document.getElementById("can");
  image=new SimpleImage(img);
  realimg=new SimpleImage(img);
 // image.setSize(400,400);
  image.drawTo(canv);
}
function dogray(){
  var canv=document.getElementById("can");
  if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
  for(var pixl of image.values()){
  var avg=(pixl.getRed()+pixl.getGreen()+pixl.getBlue())/3;
    pixl.setGreen(avg);
    pixl.setRed(avg);
    pixl.setBlue(avg);
  }
  image.drawTo(canv);
  image=new SimpleImage(realimg);
}
function dored(){
  var canv=document.getElementById("can");
  if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
 for(var pixl of image.values()){
   var avg=(pixl.getRed()+pixl.getGreen()+pixl.getBlue())/3;  
    if(avg<128)
      {
        pixl.setBlue(0);
        pixl.setRed(2*avg);
        pixl.setGreen(0);
      }
    else {
       pixl.setBlue(2*avg-255);
        pixl.setRed(255);
        pixl.setGreen(2*avg-255);     
    }
   
  }
    
  image.drawTo(canv);
   image=new SimpleImage(realimg);
}
function dogreen(){
  var canv=document.getElementById("can");
  if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
  for(var pixl of image.values()){
   var avg=(pixl.getRed()+pixl.getGreen()+pixl.getBlue())/3;  
    if(avg<128)
      {
        pixl.setBlue(0);
        pixl.setRed(0);
        pixl.setGreen(2*avg);
      }
    else {
       pixl.setBlue(2*avg-255);
        pixl.setRed(2*avg-255);
        pixl.setGreen(255);     
    }
   
  }
  image.drawTo(canv);
   image=new SimpleImage(realimg);
}
function doblue(){
  var canv=document.getElementById("can");
  if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
 for(var pixl of image.values()){
   var avg=(pixl.getRed()+pixl.getGreen()+pixl.getBlue())/3;  
    if(avg<128)
      {
        pixl.setBlue(2*avg);
        pixl.setRed(0);
        pixl.setGreen(0);
      }
    else {
       pixl.setBlue(255);
        pixl.setRed(2*avg-255);
        pixl.setGreen(2*avg-255);     
    }
   
  }
  image.drawTo(canv);
   image=new SimpleImage(realimg);
}
function doreset(){
  var canv=document.getElementById("can"); 
  if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
realimg.drawTo(canv);
}
function dorainbow(){
  var canv=document.getElementById("can");
   if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
  var h=realimg.getHeight();
  for(var pixl of image.values()){
    var y=pixl.getY();
     var avg=(pixl.getRed()+pixl.getGreen()+pixl.getBlue())/3;
    if(y<=h/7)
      {
        if(avg<128){
          pixl.setRed(2*avg);
          pixl.setGreen(0);
          pixl.setBlue(0);
        }
        else {
           pixl.setRed(255);
         pixl.setGreen(2*avg-255);
          pixl.setBlue(2*avg-255);
        }
      }
    else if(y<=2*h/7)
      {
        if(avg<128){
           pixl.setRed(2*avg);
          pixl.setGreen(0.8*avg);
          pixl.setBlue(0);
        }
        else {
           pixl.setRed(255);
          pixl.setGreen(1.2*avg-51);
          pixl.setBlue(2*avg-255);
        }
      }
    else if(y<=3*h/7)
      {
        if(avg<128){
           pixl.setRed(2*avg);
          pixl.setGreen(2*avg);
          pixl.setBlue(0);
        }
        else {
           pixl.setRed(255);
          pixl.setGreen(255);
          pixl.setBlue(2*avg-255);
        }
      }
    else if(y<=4*h/7)
      {
        if(avg<128){
           pixl.setRed(0);
          pixl.setGreen(2*avg);
          pixl.setBlue(0);
        }
        else {
           pixl.setRed(2*avg-255);
          pixl.setGreen(255);
          pixl.setBlue(2*avg-255);
        }
      }
    else if(y<=5*h/7)
      {
        if(avg<128){
           pixl.setRed(0);
          pixl.setGreen(0);
          pixl.setBlue(2*avg);
        }
        else {
           pixl.setRed(2*avg-255);
          pixl.setGreen(2*avg-255);
          pixl.setBlue(255);
        }
      }
    else if(y<=6*h/7)
      {
        if(avg<128){
           pixl.setRed(0.8*avg);
          pixl.setGreen(0);
          pixl.setBlue(2*avg);
        }
        else {
           pixl.setRed(1.2*avg-51);
          pixl.setGreen(2*avg-255);
          pixl.setBlue(255);
        }
      }
    else if(y<=h)
      {
        if(avg<128){
           pixl.setRed(1.6*avg);
          pixl.setGreen(0);
          pixl.setBlue(1.6*avg);
        }
        else {
           pixl.setRed(0.4*avg+153);
          pixl.setGreen(2*avg-255);
          pixl.setBlue(0.4*avg+153);
        }
      }
  }
  image.drawTo(canv);
  image=new SimpleImage(realimg);
}
function doblur(){
 var canv=document.getElementById("can");
   if(image==null||!image.complete())
  {
    alert("Image is not loaded");
    return;
  }
  var h=realimg.getHeight();
  var w=realimg.getWidth();
  for(var pixl of image.values()){
    var x=pixl.getX();
    var y=pixl.getY();
    var r=Math.random();
    if(r<0.5)
      {
         var pixel=realimg.getPixel(x,y);
        image.setPixel(x,y,pixel);
      }
    else {
      var X=10*Math.random();
      var Y=10*Math.random();
      if(x+X<w){
        if(y+Y<h){
          var pixels=realimg.getPixel(x+X,y+Y)
        }
        else {
          var pixels=realimg.getPixel(x+X,y-Y)
        }
      }
      else {
        if(y+Y<h){
          var pixels=realimg.getPixel(x-X,y+Y)
        }
        else {
          var pixels=realimg.getPixel(x-X,y-Y)
        }
      }
      image.setPixel(x,y,pixels);
    }
  }
  
  
 image.drawTo(canv);
 image=new SimpleImage(realimg);  
}