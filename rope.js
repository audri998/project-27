class rope{
    constructor(Body1,Body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:Body1, 
            bodyB:Body2,
            //stiffness:0.4,
            //length:10
            pointB:{x: this.offsetX,y:this.offsetY}

           
        }
        
        this.rope1=Constraint.create(options)
        World.add(world,this.rope1)
    }
    display(){
        var pointA=this.rope1.bodyA.position;
        var pointB=this.rope1.bodyB.position;
        var a = pointB.x+this.offsetX;
        var b = pointB.y+this.offsetY;
        strokeWeight(4);
        line(pointA.x,pointA.y,a,b);
    }
}