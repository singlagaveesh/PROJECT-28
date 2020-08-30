class Stone
{
      constructor(x,y,radius)
    {
      var options = 
      {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      this.image = loadImage("sprites/stone.png")
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      circleMode(RADIUS);
      circle(pos.x, pos.y, this.radius,this.radius);
    }
}