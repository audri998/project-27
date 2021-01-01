class bob {

    constructor(x,y,r){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    }
    this.x=x
    this.y=y
    this.r=r
    this.Body=Bodies.circle(x,y,r/2,options) 
    World.add(world,this.Body)
    
    }
    display(){
        var pos=this.Body.position 
        //push();
        //translate(pos.x,pos.y);
        let c = color('magenta');
        fill(c);
        //noStroke();
        ellipse(pos.x,pos.y,this.r,this.r);
        noFill();
        //pop();
    }
    
    
    }
    