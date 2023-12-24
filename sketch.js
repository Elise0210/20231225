var face_colors = "004b23-006400-007200-008000-38b000-70e000-9ef01a-ccff33".split("-").map(a=>"#"+a)
var eye_colors = "03045e-0077b6-00b4d8-90e0ef-caf0f8".split("-").map(a=>"#"+a)

var pos_x=[]
var pos_y=[]
var sizes=[]
var colors =[]
var v_y = []
var v_x = []
var txts = []
var face_move_var=[]

var lang = navigator.language
var myRac = new p5.SpeechRec(lang)





function setup() {
createCanvas(windowWidth,windowHeight);
inputElement = createInput ("411730426高于惠")
inputElement.position(10,10)
inputElement.size(160,20)
inputElement.style("font-size","15px")
inputElement.style("color","#dc2f02")
inputElement.style("#dc2f02")


btnMoveElement =createButton("移動")
btnMoveElement.position(190,10)
btnMoveElement.size(80,40)
btnMoveElement.style("font-size","20px")
btnMoveElement.style("color","#001d3d")
btnMoveElement.mousePressed(face_move)

btnMoveElement =createButton("暫停")
btnMoveElement.position(280,10)
btnMoveElement.size(80,40)
btnMoveElement.style("font-size","20px")
btnMoveElement.style("color","#001d3d")
btnMoveElement.mousePressed(face_stop)

radioElement = createRadio()
radioElement.option("暫停")
radioElement.option("旋轉")
radioElement.option("移動")
radioElement.position(390,15)
radioElement.size(200,40)
radioElement.style("font-size","20px")
radioElement.style("color","#001d3d")
//radioElement.style("background-color","#fff")
//radioElement.mousePressed(face_stop)

btnVoiceElement = createButton("語音")
btnVoiceElement.position(600,10)
btnVoiceElement.size(80,40)
btnVoiceElement.style("font-size","20px")
btnVoiceElement.style("color","#fff")
btnVoiceElement.style("background",'black')
btnVoiceElement.mousePressed(voice_go)



//rect(80,80,150,50)
music_btn=createButton("音樂")
music_btn.position(700,10)
music_btn.size(80, 40);
music_btn.style('background-color', 'black');
music_btn.style('font-size', '20px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()
    }	

    
    //音樂
  
    Speech_btn.position(10,10)
    Speech_btn.size(350, 100);
    Speech_btn.style('background-color', 'black');
    Speech_btn.style('font-size', '32px');
    Speech_btn.style('color', 'white');
    Speech_btn.mousePressed(Speech_btn_pressed)
  
      
  
  
    function preload(){
      song=loadSound("O Holy Night - DJ Williams.mp3");
    }
  
  function music_btn_pressed(){
    song.stop()
    song.play()
    songIsplay=true
    mouseIsplay=false
  }


function draw() {
background(220);
mode= radioElement.value()
for(var i=0;i<pos_x.length;i=i+1)
{
//text(“X:”+mouseX+" Y:"+mouseY,50,50)

  push() 
    txts = inputElement.value();
    translate(pos_x[i],pos_y[i])
    if(mode=="旋轉"){
      rotate(sin(frameCount/20))
    }
    //else
    //{
    //  if(mode=="移動"){
    //    face_move_var=true

    //  }
    //  else{
    //    face_move_var =false
    //  }

  //  }
    drawface(colors[i],0,sizes[i])
  pop()
  if(face_move_var || mode=="移動"){
    pos_y[i] = pos_y[i] + v_y[i]
  }
  if(pos_y[i]>height || pos_y[i]<0)
  {
    pos_x.splice(i,1)
    pos_y.splice(i,1)
    sizes.splice(i,1)
    colors.splice(i,1)
    v_y.splice(i,1)
}
}
}

function drawface(face_clr=255,eye_clr=0,size=1){
  push()
  
    scale(size)
      fill("#dc2f02")
      textSize(40)
      text(txts,50,200)
  
      fill("#6a4c93")
      ellipse(0,23,390,300)//領子
  
  fill(face_clr)
  
 // fill("#6a4c93")
 // ellipse(0,23,390,300)//領子

  //fill("#b5e48c")
  ellipse(0,0,400,300)//臉	
  //fill("#b5e48c")
  //stroke("#b5e48c")
  rect(-10,-250,10,100)//天線
  
  //fill("#b5e48c")
  //stroke("#b5e48c")
  ellipse(-5,-250,30,30)//天線球
  
  //fill("#b5e48c")
  //stroke("#b5e48c")
  triangle(150, -80, 200, -150, 220, 20)//左耳朵 
  
  //fill("#b5e48c")
  //stroke("#b5e48c")
  triangle(-150, -80, -200, -150, -220, 20)//右耳朵
  
  
  fill(eye_clr) 
  fill(255)
  stroke(255)
  ellipse(0,-70,70,50)//中間眼
  fill(255)
  stroke(255)
  ellipse(-90,-70,70,50)//左眼睛
  fill(255)
  stroke(255)
  ellipse(90,-70,70,50)//右眼睛
  
  fill(0)
  stroke(0)
  ellipse(0+mouseY/20,-70,20,20)//中間眼睛黑
  fill(0)
  stroke(0)
  ellipse(-90+mouseY/20,-70,20,20)//左眼睛黑
  fill(0)
  stroke(0)
  ellipse(90+mouseY/20,-70,20,20)//右眼睛黑

  
  fill(face_clr)

  fill(0)
  stroke(0)
  rect(-115,40,240,5)//嘴巴線
  fill(0)
  stroke(0)
  ellipse(0,40,50,30)//嘴巴
  
  if(mouseIsPressed)
  {   //mouseIsPressed為true，代表有按下滑鼠
    ellipse(0,40,80,50)  //上弧
  }
  else
  {   //mouseIsPressed為false，代表沒有按下滑鼠
   //arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //上弧
  }

  fill(0)
  stroke(0)
  ellipse(-115,40,15,15)//嘴巴左
  fill(0)
  stroke(0)
  ellipse(120,40,15,15)//嘴巴右

  // noFill()
  pop()
  
  }




function mousePressed(){
if(mouseY>60){
pos_x.push(mouseX)
pos_y.push(mouseY)
sizes.push(random(0.3,1))
colors.push(face_colors[int(random(face_colors.length))])
v_y.push(random(-1,1))
}
}

function face_move(){
  face_move_var =true
  //print(1)
}

function face_stop(){
  face_move_var = false
}

function voice_go(){
  myRac.onResult = showResult //取得語音辨識後去執行function

  myRec.start()  //開始辨識
}

function voice_go(){
  if(myRac.resultValue == true)
  {
    print(myRec.resultString)
    if(myRec.resultString.indexOf("走")!==-1){
      face_move_var = true
    }
    if(myRec.resultString.indexOf("停")!==-1){
      face_move_var = false  
    }
  }

}


