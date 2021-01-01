class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255
    }
      display(){
        
        if(this.body.speed < 3){
         super.display();

        }
        else{
          World.remove(world, this.body);

          push();

          this.Visiblity = this.Visiblity - 5
          tint(255,this.Visiblity);
          pop();
        }
       }
      
  getScore(){
    if(this.Visiblity<0&&this.Visiblity>-100){
      score = score+1
    }
    console.log(score)

  }
  };