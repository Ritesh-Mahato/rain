var drops=[];
function setup() {
  createCanvas(innerWidth,innerHeight);
  for(var i=0;i<1000;i++){
      drops[i]=new Drop();
  }

  
}

function draw() {
  background(0);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

