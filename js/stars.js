let stars=[];
let numStars=30;
let starSpeed=-5;

function makeStar() {
	return {
		x: Math.random(),
		y: Math.random(),
		distance: Math.sqrt(Math.random()),
		color: '#fff'
	};
}

for (i=0;i<numStars;i++) {
	stars[i]=makeStar();
}

function updateStars() {

	for (i=0;i<numStars;i++) {
  
    stars[i].y-=Math.pow(stars[i].distance,2)/canvas.width*starSpeed;
    
		if (stars[i].y>1) {
			stars[i]=makeStar();
			stars[i].y=0;
    }
    
		ctx.beginPath();
		ctx.save();
		ctx.arc(stars[i].x*canvas.width,stars[i].y*canvas.height,stars[i].distance*2,0,2*Math.PI,false);
		ctx.lineWidth=stars[i].distance*4;
		ctx.stroke();
		ctx.fillStyle=stars[i].color;
		ctx.fill();
		ctx.restore();
    ctx.closePath();
	}
}
