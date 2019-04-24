var balls = [];
var windowHeightx = window.innerHeight;
var windowWidthx = window.innerWidth;
function setup(){
	
	createCanvas(windowWidthx,windowHeightx);
	background(242,29,47);

	for (var i=0; i<45; i++){
		addBall();
	}
	
}
function draw(){
	background(36,27,27);
	for (var i=0; i<balls.length; i++){
		balls[i].move();
		balls[i].draw();
	}
	var maxdis = 300;
	for (var i=0; i<balls.length; i++){
		for (var j=0; j<balls.length; j++){
			if (i!=j){
			var dis = dist(balls[i].x, balls[i].y, balls[j].x, balls[j].y);
				if (dis < maxdis){
					var alpha = 1-dis/maxdis;
					var strokecolor = '163, 3, 32,';
					stroke('rgba('+strokecolor+''+alpha+')');
					line(balls[i].x, balls[i].y, balls[j].x, balls[j].y);
				}
			}
		}
	}
}



function addBall(){
	var tempball = new ballClass();
	tempball.x = random(width);
	tempball.y = random(height);
	tempball.radius = 5;
	var maxspeed = 2.0;
	tempball.speedx = random(-maxspeed, maxspeed);
	tempball.speedy = random(-maxspeed, maxspeed);
	balls.push(tempball);
}

function mouseMoved(){
	var mouseXDif = winMouseX-pwinMouseX;
	var mouseYDif = winMouseY-pwinMouseY;
	
	for (var i=0; i<balls.length; i++){
	balls[i].x += mouseXDif*0.1;
	balls[i].y += mouseYDif*0.1;	
}

}

function ballClass(){
	this.x;
	this.y;
	this.radius;
	this.speedx;
	this.speedy;
	this.transparent = 1;
	this.color = 'rgba(245,45,57, '+this.transparent+')';

	this.move = function(){
		this.x += this.speedx;
		this.y += this.speedy;

		if (this.x < 0-this.radius) { this.x=width+this.radius; }
		if (this.x > width+this.radius) { this.x=0-this.radius; }
		if (this.y < 0-this.radius) { this.y=height+this.radius; }
		if (this.y > height+this.radius) { this.y=0-this.radius; }
	}

	this.draw = function(){
		//fill(245,45,57);
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.radius, this.radius);
		}

}