// 最終課題を制作しよう

// テキスト「キーボード操作に反応する」
let x, y, v,x1,y1,vx1,vy1,t,r,vt,vr,x2,y2,vx2,vy2,d,d1,d2;  

const g=1//重力  

const jump=20//ジャンプ力  

const ground=20  

const size=20  

const limit=60  

const limit2=20  

const limit3=40

const limit4=0.3

let startTime;  

let state;  

function setup(){  

createCanvas(windowWidth, windowHeight);  

x = width /2;  

y = height *0.9;  

vy=0; 


textAlign(CENTER,CENTER)  

 

state=0  

x1 = width / 3;  

y1 = height / 3;  

vx1 =4;  

vy1 =4;  

x2=random(10,100)
y2=random(10,100)
vx2=random(11,15)
vy2=random(11.15)
  
t=random(10,100) 
r=random(10,100)

vt=random(5,10)
vr=random(5,10)  
  


}  

function draw(){  

background(160, 192, 255); 

let ellapsedTime=(millis()-startTime)/1000; 
  
d = sqrt((x - x1)**2 + (y - y1)**2) 

d1=sqrt((x-x2)**2+(y-y2)**2) 

d2=sqrt((x-t)**2+(y-r)**2) 
  
  let gy=height-ground; 
  textSize(15)
text("矢印キーで左右に移動",80,10)
text("Aを押しながら矢印キーでダッシュ",123,25)
text("スペースキーでジャンプ",86,40)

textSize(32) 


if(state==0){  

text("Press Enter to start",width/2,height/2)  

text("60秒間　ぶつかるな！",width / 2, height / 2 + 50)  


}else if(state==1){  

 let remainingTime=limit-ellapsedTime;

if(ellapsedTime>limit){  

state=2  

}else{  


text(floor(remainingTime),width/2,height/2)  

}  

}else if (state==2){  

text("Game Clear",width/2,height/2)  
    text("Reload to Restart",width / 2, height / 2 + 50)

return}  
  
  if(d<48 || d1<48 || d2<48){state=3}  

 if(state==3){ 

    text("Game Over",width/2,height/2) 

  text("Reload to Restart",width / 2, height / 2 + 50)
return } 
 

if(state==1){let ellapsedTime=(millis()-startTime)/1000; if(ellapsedTime>limit2){  

ellipse(t,r,50)  

t += vt 
r += vr  

// 跳ね返りは「速度 × -1」  

if(t < 0 || t > width){ vt = -1 * vt; }  

if(r < 0 || r > gy-25){ vr = -1 * vr; }  

// x座標, y座標を画面内に戻しておく  

t = constrain(t, 0, width);  

r = constrain(r, 0, height);  

}  

}
  
if(state==1){let ellapsedTime=(millis()-startTime)/1000; if(ellapsedTime>limit3){   

  

ellipse(x2, y2, 50); // 速度は「位置の変化量」  

x2 += vx2;  

y2 += vy2; // 跳ね返りは「速度 × -1」  

if(x2 < 0 || x2 > width){ vx2 = -1 * vx2; }  

if(y2 < 0 || y2 > gy-25){ vy2 = -1 * vy2; } // x座標, y座標を画面内に戻しておく  

x2 = constrain(x2, 0, width);  

y2 = constrain(y2, 0, height); 

} 

}   

ellipse(x, y-15, 50);  

if(keyIsDown(LEFT_ARROW)&&x>0){ x -= 5; }  

if(keyIsDown(RIGHT_ARROW)&&x<width){ x += 5; }  

if(keyIsDown("A".charCodeAt(0))&&keyIsDown(RIGHT_ARROW)&&x<width){ x+= 10; }  

if(keyIsDown("A".charCodeAt(0))&&keyIsDown(LEFT_ARROW)&&x>0){ x-= 10; }  

 

line(0,gy,width,gy);//地面の線  

y += vy;//y=y+vy  

if(y<height-ground-size/2){//地面より上、空中にいる間  

vy+=g;//下方向に重力の影響で加速する  

}  

else{  

vy=0;  

y=height-ground-size/2;  

}  
  if(state==1) {let ellapsedTime=(millis()-startTime)/1000; if(ellapsedTime>limit4)
//最初に出現する球
ellipse(x1, y1, 50); // 速度は「位置の変化量」  

x1 += vx1; y1 += vy1; // 跳ね返りは「速度 × -1」  

if(x1 < 0 || x1 > width){ vx1 = -1.03 * vx1; } 
if(y1 < 0 || y1 > gy-20){ vy1 = -1.03 * vy1; } // x座標, y座標を画面内に戻しておく  

x1 = constrain(x1, 0, width); y1 = constrain(y1, 0, height);  

   }



  
console.log("Current State:", state);
console.log("Player Position:", x, y);
console.log("Object 1 Position:", x1, y1);
console.log("Object 2 Position:", x2, y2);
console.log("Distance to Object 1:", d);
console.log("Distance to Object 2:", d1);
console.log("Distance to Object 3", d2)
}  

function keyPressed(){  

if(keyCode===32)//keyCode 32はスペース  

if(y>=height-ground-size/2){//地面にいる時だけジャンプ  

vy=-jump;  

}  

if(keyCode===ENTER) {

if(state==0){  
  startTime = millis();
state=1  
} 
 

}  
  


}  

function windowResized(){  

resizeCanvas(windowWidth, windowHeight);  

}