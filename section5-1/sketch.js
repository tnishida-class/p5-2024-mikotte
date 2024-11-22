// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,51,153);
  noStroke();

  for(let i = 0; i < 12; i++){//円を12等分し、30°ずつずらして配置
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    fill(255,204,0)
    star(x,y,width/20)//星を描く関数
    beginShape();
  }
}


function star(cx, cy, r){//星を描く関数
  beginShape();
  
  for (let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }//360*2/5ずつずらしてポイントした5点をつなげる
  endShape(CLOSE);
}
   
  



// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
