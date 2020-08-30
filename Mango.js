class Mango
{
    constructor(x,y,radius) 
    {
    var options = 
    {
        isStatic: true,
        restitution:0,
        friction:1
    }
    this.body = Bodies.circle(x,y,radius);
    this.radius = radius;
    this.image = loadImage("sprites/mango.png")
    World.add(world, this.body);
     }
    display()
    {
    var pos =this.body.position;
    circleMode(RADIUS);
    circle(pos.x, pos.y, this.radius,this.radius);
    }
}