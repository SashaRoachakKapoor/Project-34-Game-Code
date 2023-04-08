class FishFood{

constructor(x,y,width,height){

this.x = x
this.y = y
this.width = width
this.height = height
this.fishFood_image = loadImage("fish food.png")
}

display(){

    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.fishFood_image, 0, 0, this.width, this.height);
    pop();
    
    }
    
}