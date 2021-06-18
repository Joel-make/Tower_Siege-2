class Block4{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("box4.PNG");
      }
      display(){
        if(this.body.speed<5)
        {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
        
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibilty=this.visibilty-5;
        tint(255,this.visibilty)
        image(this.image,0,0,this.width, this.height);
        pop();
      
      }

      }
}
