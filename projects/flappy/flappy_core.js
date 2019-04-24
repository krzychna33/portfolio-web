function Bird(){
    this.y = height/2;
    this.x = 50;
    
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;

    
    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }
    
    this.up = () => {
        this.velocity += this.lift;
    }
    
    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        
        
        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }
        
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }

    }
}

function Pipe(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    
    this.x = width;
    this.w = 40;
    
    this.speed = 3;
    
    this.hl = false;
    
    this.hits = (bird) => {
        if(bird.y < this.top || bird.y > height - this.bottom){
            
            if(bird.x > this.x && bird.x < this.x+this.w){
                this.hl = true;
                return true; 
            }
        }
        
        return false;
        
    }
        
    
    this.show = () =>{
        fill(255);
        if (this.hl){
            fill(255,0,0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }
    
    this.update = () => {
        this.x -= this.speed;
    }
    
    this.offscreen = () => {
        if (this.x < -this.w){
            return true;
        }
        else{
            return false
        } 
    }
}