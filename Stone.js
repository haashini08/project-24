class Stone {
    constructor(x,y,width,height) {
      var options = {
        'density':12,
        'friction':0.9,
        'restitution':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");

      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };