class Stone {
    constructor(x, y,r) {
      var options = {
      isStatic:false,
      resticution:0,
      friction:1,
      density:1.2
      }
      this.x=x;
      this.y=y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      this.image=loadImage("Plucking mangoes/stone.png")
      World.add(world, this.body);
    }
    display(){
      var mangopos =this.body.position;
      push();
      translate(mangopos.x,mangopos.y);
      imageMode(CENTER);
      strokeWeight(3);
      fill(255,0,255);
      image(this.image,0, 0, this.r,this.r);
      pop();
    }
  };
  