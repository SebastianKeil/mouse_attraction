let r;
let g;
let b;
let movers = [];
let back;


function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  back = color(50,50,50);
  
  acc_s = createSlider(1, 5,1);
  limit = createSlider(1/10, 20,10);
  div_s = createSlider(0,200,2);
  
  mousePressed();
}

function draw() {
  
  background(back);
  for(let i= 0;i < movers.length; i++){
    div = div_s.value();
    
    let mouse = createVector(mouseX-random(-div, div), mouseY-random(-div, div));
    let pos = movers[i].getpos();
    let force = p5.Vector.sub(mouse, pos);
    let force_mag = force.mag()
;    force.normalize();
    force.mult(acc_s.value());

    movers[i].applyForce(force);
    movers[i].update(limit.value());
    
    //print("force: " + force_mag);
    
    drawArrow(createVector(mouseX, mouseY), pos, color(g,b,r), map(force_mag, 1, 1000, 15, 1));
    
    movers[i].show(r, g, b);
  }
}

function mousePressed(){
  if(mouseY<height-10){
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    back = color(255 - r, 255 - g, 255 - b);

    mover = new Mover(mouseX, mouseY);
    movers.push(mover);
    
    if(movers.length > 20){
      for(let i = 0; i < 20;i++){
        movers.shift();
        print("movers: " + movers.length);
      }
    }
    
  }  
}