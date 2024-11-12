// 小手調べ
function setup(){createCanvas(200, 200);//キャンバスを書く
  background(2000);//背景を書く
  noFill();//ぬりつぶし無し
  for(let i = 0; i < 10; i++){//iは0から始まり10未満まで1ずつ増加
    let d=(i+1)*10;//ｄは円の半径　円を10個書く
    if(i<5){//iが5以下なら
      stroke(0,0,255);//線が青色
    }else{//条件に合わない場合
      stroke(255,0,0);//線が赤色
    }
    // BLANK[1]
 ellipse(height/2,width/2,d); //円の（x座標ｙ座標半径）
}
}
