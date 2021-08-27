function drawArrow(base, vec, col, weight){
  strokeWeight(weight);
  stroke(col);
  //vec2 = p5.Vector.sub(base, vec);
  //vec2.mult(0.03);
  //vec.sub(vec2);
  line(base.x, base.y, vec.x, vec.y);
}