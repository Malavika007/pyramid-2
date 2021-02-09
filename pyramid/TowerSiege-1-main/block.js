class block{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed<5) {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
        } 
        else{
          World.remove(world, this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
     
      pop();
        }
      }
}