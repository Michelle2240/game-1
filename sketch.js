var b1, b2;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=3;
  b1.floors=23;
  
  b10 =new Building();
  b10.position=9;
  b10.floors = 12;
  
  
  b9=new Building();
  b9.position=8;
  b9.floors =20;
  
  
  b8 =new Building();
  b8.position=7;
  b8.floors = 23;
  
  b7 =new Building();
  b7.position=6;
  b7.floors = 35;
  
  
  
  b6 =new Building();
  b6.position=2;
  b6.floors =20;
  
  
  
b4 =new Building();
  b4.position =5;
  b4.floors =42;

  
  b3=new Building();
  b3.position=4;
  b3.floors =35;
  
  
  b2=new Building();
  b2.position=1;
  b2.floors=12;
 
}


function draw(){
  background("blue");
  fill("violet");
  b1.display();
  fill("yellow");
  b10.display();
  fill("white");
  b9.display();
  fill("pink");
  b8.display();
  fill("violet");
  b7.display();
  fill("yellow");
  b6.display();
  fill("green");
  b4.display();
  fill("pink");
  b3.display();
  fill("puple");
  b2.display();
  fill("white");
  
   for (var i = 0; i < 400; i=i+20) {
    line(213,i,213,i+10);
  }
}
