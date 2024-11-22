// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count=0;//数を数える
let cycle=100;//一つのサイクルの長さを決める　countが99までいったら0に戻る
let size=50;
let increment=1;


function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  // BLANK[1]
  if(keyIsDown(SHIFT)){//SHIFTを押している間
    increment=4;}//速度4倍 increment=対象の値を追加する演算子
    else{
      increment=1;
    }
    count=(count+increment)%cycle//countをincrementを使用して増加させる
  if (count<cycle/2){
    size=count+50;
  }else{
    size=(cycle-count)+50;}
 
  ellipse(width / 2, height / 2, size);
}
