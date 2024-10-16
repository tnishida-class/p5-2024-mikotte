// ダーツ

function setup() {
  const green = color(0, 255, 0);//greenの定数を設定
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  drawCircle(black, maxR);//黒の円

 

  drawArcs(green, red, maxR * 0.8);//赤と緑の円
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawArcs(cream,black,maxR*0.75)//クリーム色と黒の円
  drawArcs(green, red, maxR * 0.5)
  drawArcs(cream,black,maxR*0.45)
  drawCircle(green, maxR * 0.1);//緑の円
  
  drawCircle(red, maxR * 0.05);//赤の円
}

function drawCircle(c, r){
  const cx=width/2;//中心は（cx,cy）
  const cy=height/2;
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  const cx=width/2;//中心は（cx,cy)
  const cy=height/2;
  for (let i = 0; i < 20; i++) {//20個の円弧を書く
    let start = TWO_PI / 20 * i;//TWO_PIは2π
    let stop = TWO_PI / 20 * (i + 1);//それぞれの円弧の開始角度と終了角度を計算
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

