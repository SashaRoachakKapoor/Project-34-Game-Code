class Shrimp {

constructor(x,y,width,height){

this.x = x
this.y = y
this.width = width
this.height = height
this.shrimp_image = loadImage('Shrimp.png')
}

display(){

push();
translate(this.x, this.y);
imageMode(CENTER);
image(this.shrimp_image, 0, 0, this.width, this.height);
pop();

}





}