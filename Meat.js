class Meat {

constructor(x,y,width,height){

this.x = x
this.y = y
this.width = width
this.height = height
this.meat_image = loadImage("meat.png")
}

display(){

    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.meat_image, 0, 0, this.width, this.height);
    pop();
    
    }

}