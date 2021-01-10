class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.height=height;
        this.width=width;
        this.visibility=180;
    }
    display(){
        if(this.body.speed<3){
            push();
            rectMode(CENTER);
            var pos=this.body.position;
            fill("green");
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            pop();
        }
    }
    score(){
        if(this.visibility<0&&this.visibility>-127){
            score=score+1;
        }
    }
}