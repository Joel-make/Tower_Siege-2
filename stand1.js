class Ground_{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(640,200,200,10,ground_options)
          World.add(world,this.ground);
          this.image=loadImage("ground.PNG")
    }
    display(){
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
        image(this.image,this.ground.position.x,this.ground.position.y,200,10);
    }
}