// チェッカー
function setup() {
  createCanvas(200, 200);//キャンバス作成
  let size = width / 8;//サイズは横幅を八等分
  let s=size//ｓはサイズ
  noStroke();//線を消す
  for(let i = 0; i < 8; i++){//iは０から始まり1ずつ増え8以上になったら終了
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    let x=i*s;
  let y=j*s;
  if((i+j)%2==1){fill(122);//（i+j)を2で割った余りが1のとき、灰色で
rect(x,y,s,s)}//四角を書く
 if(((i+j)%2==1)&&(j<3)){//(i+j)を2で割った余りが1、かつ、jが3以下
  fill(255,0,0);//赤色で
ellipse(x+s/2,y+s/2,s);//円をかく
 }
 if(((i+j)%2==1)&&(4<j)){
  fill(0);
  ellipse(x+s/2,y+s/2,s)
 }
 } }
}
