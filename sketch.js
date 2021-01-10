const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score=0;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,750);
    engine=Engine.create();
    world=engine.world;

    block1=new Block(575,450,30,40);
    block2=new Block(605,450,30,40);
    block3=new Block(635,450,30,40);
    block4=new Block(665,450,30,40);
    block5=new Block(695,450,30,40);
    block6=new Block(725,450,30,40);

    block7=new Block(605,410,30,40);
    block8=new Block(635,410,30,40);
    block9=new Block(665,410,30,40);
    block10=new Block(695,410,30,40);

    block11=new Block(635,370,30,40);
    block12=new Block(665,370,30,40);

    block13=new Block(650,330,30,40);

    block14=new Block(975,370,30,40);
    block15=new Block(1005,370,30,40);
    block16=new Block(1035,370,30,40);
    block17=new Block(1065,370,30,40);
    block18=new Block(1095,370,30,40);
    block19=new Block(1125,370,30,40);

    block20=new Block(1005,330,30,40);
    block21=new Block(1035,330,30,40);
    block22=new Block(1065,330,30,40);
    block23=new Block(1095,330,30,40);

    block24=new Block(1035,290,30,40);
    block25=new Block(1065,290,30,40);

    block26=new Block(1050,250,30,40);
    
    ground1=new Ground(600,650,1200,20);
    platform=new Ground(1050,400,250,10);
    platform2=new Ground(650,480,250,10);

    polygon=Bodies.circle(200,375,20);
    World.add(world,polygon);

    sling=new Slingshot(this.polygon,{x:200,y:375});

    Engine.run(engine);

}
function draw(){
    if(background("lightblue")&&background("darkblue")){
        ground1.display();
        platform.display();
        platform2.display();

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        block17.display();
        block18.display();
        block19.display();
        block20.display();
        block21.display();
        block22.display();
        block23.display();
        block24.display();
        block25.display();
        block26.display();

        sling.display();

        block1.score();
        block2.score();
        block3.score();
        block4.score();
        block5.score();
        block6.score();
        block7.score();
        block8.score();
        block9.score();
        block10.score();
        block11.score();
        block12.score();
        block13.score();
        block14.score();
        block15.score();
        block16.score();
        block17.score();
        block18.score();
        block19.score();
        block20.score();
        block21.score();
        block22.score();
        block23.score();
        block24.score();
        block25.score();
        block26.score();

        imageMode(CENTER);
        image(polygonImg,polygon.position.x,polygon.position.y,50,50);

        fill("black");
        textSize(20);
        text("Score:"+score,750,40);
    }
}
function mouseDragged(){
    Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(this.polygon);
    }
}
async function changeBg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        background("lightblue");
    }
    else{
        background("darkblue");
    }
}
