
function setup() 
{
  createCanvas(400, 400);
  box=new Box(100,200,20,20,0,3);
}

function draw() 
{
  background(220);
box.show()
box.moveup()
}

