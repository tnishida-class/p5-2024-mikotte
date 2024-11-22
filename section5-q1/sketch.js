// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){

  createCanvas(400, 400);
  background(255);//背景色　白
  balloon("I love keyakizaka46",25,25,color(200,200,255));
}//テキスト,位置,背景色

function balloon(t,x,y,bgColor){//t=テキスト内容
  let w = textWidth(t);
  let h = textAscent() + textDescent();//テキストの上部と下部の高さを考慮
  let p = 10;//余白
  fill(0);
  rect(x, y, w + p * 2, h + p * 2);//吹き出しの本体

  fill(0)
  triangle(x+w/2-10,y+h+p*2,x+w/2+10,y+h+p*2,x+w/2,x+h+p*2+10)
//吹き出しのしっぽ 三つの頂点
  fill(bgColor);
  text(t, x+p, y+h+p-5);
}
