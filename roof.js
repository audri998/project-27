class roof {

    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.Body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.Body);
    
    }
    display(){
        var pos=this.Body.position 
        //push();
        //translate(pos.x,pos.y);
        let c = color('grey');
        fill(c);
        rect(pos.x,pos.y,this.width,this.height);
        noFill();
        //pop();
    }
    
    
    }