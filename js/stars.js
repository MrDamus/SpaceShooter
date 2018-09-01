// Set the number of stars to draw
let stars=[];
let numStars=30;
let starSpeed=-5;

// Reset a star
function makeStar() {
	return {
		x: Math.random(),
		y: Math.random(),
		distance: Math.sqrt(Math.random()),
		// color: 'hsl('+Math.random()*40+',100%,'+(85+Math.random()*30)+'%)'
		color: '#fff'
	};
}

// Initialise stars
for (i=0;i<numStars;i++) {
	stars[i]=makeStar();
}

// Draw stars
function updateStars() {

	// Draw each star
	for (i=0;i<numStars;i++) {
  
		// Move the star first
    stars[i].y-=Math.pow(stars[i].distance,2)/canvas.width*starSpeed;
    
		// If it's off-screen, reset it
		if (stars[i].y>1) {
			stars[i]=makeStar();
			stars[i].y=0;
    }
    
		// Draw the star
		ctx.beginPath();
		ctx.save();
		ctx.arc(stars[i].x*canvas.width,stars[i].y*canvas.height,stars[i].distance*2,0,2*Math.PI,false);
		ctx.lineWidth=stars[i].distance*4;
		// ctx.strokeStyle='rgba(255,255,255,0.2)';
		ctx.stroke();
		ctx.fillStyle=stars[i].color;
		ctx.fill();
		ctx.restore();
    ctx.closePath();
	}
}
