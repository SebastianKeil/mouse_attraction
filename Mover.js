class Mover{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  }
  
  getpos(){
    return this.pos;
  }
  
  applyForce(force){
    //print("acc before: " + this.acc.mag());
    this.acc.add(force);
    //print("acc after: " + this.acc.mag());
  }
  
  update(lim){
    this.acc.limit(lim);
    this.vel.add(this.acc);
    this.vel.limit(lim);
    
    //print("lim :" + lim);
    //print("vel :" + this.vel.mag());
    
    this.pos.add(this.vel);
  }
  
  show(r, g, b){
    noStroke();
    fill(r,g,b);
    ellipse(this.pos.x, this.pos.y, 40);
  }
  
  showimpulse(){
    let s = color(g, b, r);
    drawArrow(this.pos, this.vel, s, 10)
  }
}