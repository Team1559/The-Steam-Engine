	//Red Starts
	var start1RPress = false;
	var start2RPress = false;
	var start3RPress = false;

	//Blue Starts
	var start1BPress = false;
	var start2BPress = false;
	var start3BPress = false;

	//Red Gears
	var gear1RPress = false;
	var gear2RPress = false;
	var gear3RPress = false;

	//Blue Gears
	var gear1BPress = false;
	var gear2BPress = false;
	var gear3BPress = false;

	//Shooters
	var shooterRPress = false;
	var shooterBPress = false;

window.onload = function(){
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var field = document.createElement("img");
	field.src = "http://localhost/Field.PNG";

	var lastX = 0;
	var lastY = 0;

	update();
	

	function update() {
		context.clearRect(0,0, width, height);
		//Background
		context.beginPath();
		context.fillStyle = "#76787a";
		context.fillRect(0,0,width,height);
		context.stroke();
		//Field
		context.drawImage(field, 10, 10);
		context.stroke();
		//Alliance Specification
		context.font="40px Impact";
		context.fillStyle = "#f70000";
		context.fillText("Red Alliance", 55,50);
		context.stroke();

		context.font="40px Impact";
		context.fillStyle = "#0000f7";
		context.fillText("Blue Alliance", 995,50);
		context.stroke();

		context.fillStyle = "#ffffff";
		context.strokeStyle = "#ffffff";
		
		//drawLine(start2R.xC, start2R.yC, gear2RNode1.xC, gear2RNode1.yC);
		//drawLine(start3R.xC, start3R.yC, gear3RNode1.xC, gear3RNode1.yC);
		//drawPoint(gear3RNode1.xC,gear3RNode1.yC);
		//drawPoint(gear2RNode1.xC, gear2RNode1.yC);
		//drawPoint(gear1RNode1.xC,gear1RNode1.yC);

		if (start1RPress) {
			drawLine(start1R.xC, start1R.yC, gear1RNode1.xC, gear1RNode1.yC);
			drawPoint(gear1RNode1.xC,gear1RNode1.yC);
			lastY = gear1RNode1.yC;
			lastX = gear1RNode1.xC;
		}

		if (start2RPress) {
			drawLine(start2R.xC, start2R.yC, gear2RNode1.xC, gear2RNode1.yC);
			drawPoint(gear2RNode1.xC,gear2RNode1.yC);
			lastY = gear2RNode1.yC;
			lastX = gear2RNode1.xC;
		}

		if (start3RPress) {
			drawLine(start3R.xC, start3R.yC, gear3RNode1.xC, gear3RNode1.yC);
			drawPoint(gear3RNode1.xC,gear3RNode1.yC);
			lastY = gear3RNode1.yC;
			lastX = gear3RNode1.xC;
		}

		if (start1BPress) {
			drawLine(start1B.xC, start1B.yC, gear1BNode1.xC, gear1BNode1.yC);
			drawPoint(gear1BNode1.xC,gear1BNode1.yC);
			lastY = gear1BNode1.yC;
			lastX = gear1BNode1.xC;
		}

		if (start2BPress) {
			drawLine(start2B.xC, start2B.yC, gear2BNode1.xC, gear2BNode1.yC);
			drawPoint(gear2BNode1.xC,gear2BNode1.yC);
			lastY = gear2BNode1.yC;
			lastX = gear2BNode1.xC;
		}

		if (start3BPress) {
			drawLine(start3B.xC, start3B.yC, gear3BNode1.xC, gear3BNode1.yC);
			drawPoint(gear3BNode1.xC,gear3BNode1.yC);
			lastY = gear3BNode1.yC;
			lastX = gear3BNode1.xC;
		}
//-------------------------------------------------------------------------------------------\\
		if (gear1RPress && start3RPress) { //The first gear and third start
			drawLine(gear1RNode1.xC, gear1RNode1.yC, gear3RNode1.xC, gear3RNode1.yC);
			drawPoint(gear1RNode1.xC,gear1RNode1.yC);
			lastY = gear1RNode2.yC;
			lastX = gear1RNode2.xC;
		}

		if (gear1RPress && start2RPress) { //The first gear and second start
			drawLine(gear1RNode1.xC, gear1RNode1.yC, gear2RNode1.xC, gear2RNode1.yC);
			drawPoint(gear1RNode1.xC,gear1RNode1.yC);
			lastY = gear1RNode2.yC;
			lastX = gear1RNode2.xC;
		}

		if (gear1BPress && start3BPress) { //The first gear and third start
			drawLine(gear1BNode1.xC, gear1BNode1.yC, gear3BNode1.xC, gear3BNode1.yC);
			drawPoint(gear1BNode1.xC,gear1BNode1.yC);
			lastY = gear1BNode2.yC;
			lastX = gear1BNode2.xC;
		}

		if (gear1BPress && start2BPress) { //The first gear and second start
			drawLine(gear1BNode1.xC, gear1BNode1.yC, gear2BNode1.xC, gear2BNode1.yC);
			drawPoint(gear1BNode1.xC,gear1BNode1.yC);
			lastY = gear1BNode2.yC;
			lastX = gear1BNode2.xC;
		}
//-------------------------------------------------------------------------------------------\\
		if (gear2RPress && start3RPress) { //The second gear and third start
			drawLine(gear2RNode1.xC, gear2RNode1.yC, gear2RNode1.xC, gear3RNode1.yC);
			drawPoint(gear2RNode1.xC,gear2RNode1.yC);
			lastY = gear2RNode2.yC;
			lastX = gear2RNode2.xC;
		}

		if (gear2RPress && start1RPress) { //The second gear and first start
			drawLine(gear2RNode1.xC, gear2RNode1.yC, gear2RNode1.xC, gear1RNode1.yC);
			drawPoint(gear2RNode1.xC,gear2RNode1.yC);
			lastY = gear2RNode2.yC;
			lastX = gear2RNode2.xC;
		}

		if (gear2BPress && start3BPress) { //The second gear and third start
			drawLine(gear2BNode1.xC, gear2BNode1.yC, gear2BNode1.xC, gear3BNode1.yC);
			drawPoint(gear2BNode1.xC,gear2BNode1.yC);
			lastY = gear2BNode2.yC;
			lastX = gear2BNode2.xC;
		}

		if (gear2BPress && start1BPress) { //The second gear and first start
			drawLine(gear2BNode1.xC, gear2BNode1.yC, gear2BNode1.xC, gear1BNode1.yC);
			drawPoint(gear2BNode1.xC,gear2BNode1.yC);
			lastY = gear2BNode2.yC;
			lastX = gear2BNode2.xC;
		}
//-------------------------------------------------------------------------------------------\\
		if (gear3RPress && start2RPress) { //The third gear and second start
			drawLine(gear3RNode1.xC, gear3RNode1.yC, gear3RNode1.xC, gear2RNode1.yC);
			drawPoint(gear3RNode1.xC,gear3RNode1.yC);
			lastY = gear3RNode2.yC;
			lastX = gear3RNode2.xC;
		}

		if (gear3RPress && start1RPress) { //The third gear and first start
			drawLine(gear3RNode1.xC, gear3RNode1.yC, gear3RNode1.xC, gear1RNode1.yC);
			drawPoint(gear3RNode1.xC,gear3RNode1.yC);
			lastY = gear3RNode2.yC;
			lastX = gear3RNode2.xC;
		}

		if (gear3BPress && start2BPress) { //The third gear and second start
			drawLine(gear3BNode1.xC, gear3BNode1.yC, gear3BNode1.xC, gear2BNode1.yC);
			drawPoint(gear3BNode1.xC,gear3BNode1.yC);
			lastY = gear3BNode2.yC;
			lastX = gear3BNode2.xC;
		}

		if (gear3BPress && start1BPress) { //The third gear and first start
			drawLine(gear3BNode1.xC, gear3BNode1.yC, gear3BNode1.xC, gear1BNode1.yC);
			drawPoint(gear3BNode1.xC,gear3BNode1.yC);
			lastY = gear3BNode2.yC;
			lastX = gear3BNode2.xC;
		}
//-------------------------------------------------------------------------------------------\\
		if (gear1RPress) { //The first gear and first start
			drawLine(gear1RNode1.xC, gear1RNode1.yC, gear1RNode2.xC, gear1RNode2.yC);
			lastY = gear1RNode2.yC;
			lastX = gear1RNode2.xC;
		}

		if (gear2RPress) {
			drawLine(gear2RNode1.xC, gear2RNode1.yC, gear2RNode2.xC, gear2RNode2.yC);
			lastY = gear2RNode2.yC;
			lastX = gear2RNode2.xC;
		}

		if (gear3RPress) {
			drawLine(gear3RNode1.xC, gear3RNode1.yC, gear3RNode2.xC, gear3RNode2.yC);
			lastY = gear3RNode2.yC;
			lastX = gear3RNode2.xC;
		}

		if (gear1BPress) { //The first gear and first start
			drawLine(gear1BNode1.xC, gear1BNode1.yC, gear1BNode2.xC, gear1BNode2.yC);
			lastY = gear1BNode2.yC;
			lastX = gear1BNode2.xC;
		}

		if (gear2BPress) {
			drawLine(gear2BNode1.xC, gear2BNode1.yC, gear2BNode2.xC, gear2BNode2.yC);
			lastY = gear2BNode2.yC;
			lastX = gear2BNode2.xC;
		}

		if (gear3BPress) {
			drawLine(gear3BNode1.xC, gear3BNode1.yC, gear3BNode2.xC, gear3BNode2.yC);
			lastY = gear3BNode2.yC;
			lastX = gear3BNode2.xC;
		}
//-------------------------------------------------------------------------------------------\\
		if (shooterRPress && gear2RPress || shooterRPress && gear3RPress) {
			drawLine(lastX, lastY, shooterR.xC, shooterR.yC);
			drawPoint(shooterR.xC,shooterR.yC);
		} else if (shooterRPress && gear1RPress) {
			drawLine(gear1RNode3.xC, gear1RNode3.yC, shooterR.xC, shooterR.yC);
			drawPoint(gear1RNode3.xC,gear1RNode3.yC);
		}

		if (shooterBPress && gear2BPress || shooterBPress && gear3BPress) {
			drawLine(lastX, lastY, shooterB.xC, shooterB.yC);
			drawPoint(shooterB.xC,shooterB.yC);
		} else if (shooterBPress && gear1BPress) {
			drawLine(gear1BNode3.xC, gear1BNode3.yC, shooterB.xC, shooterB.yC);
			drawPoint(gear1BNode3.xC,gear1BNode3.yC);
		}

		requestAnimationFrame(update);
	}


	function drawLine(x, y, x2, y2) {
		context.beginPath();
		context.moveTo(x,y);
		context.lineTo(x2,y2);
		context.lineWidth = 3;
		context.stroke();
	}

	function drawPoint(xp,yp) {
		context.beginPath();
		context.arc(xp, yp, 3, 0, 2 * Math.PI);
		context.fill();
		context.stroke();
	}

	document.getElementById("StartPosition1R").onclick = function() {
		start1RPress = !start1RPress;
		start2RPress = false;
		start3RPress = false;

		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = false;

		start1BPress = false;
		start2BPress = false;
		start3BPress = false;

		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = false;

	}

	document.getElementById("StartPosition2R").onclick = function() {
		start1RPress = false;
		start2RPress = !start2RPress;
		start3RPress = false;

		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = false;

		start1BPress = false;
		start2BPress = false;
		start3BPress = false;

		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = false;
	}

	document.getElementById("StartPosition3R").onclick = function() {
		start1RPress = false;
		start2RPress = false;
		start3RPress = !start3RPress;

		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = false;

		start1BPress = false;
		start2BPress = false;
		start3BPress = false;

		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = false;
	}

	document.getElementById("Gear1R").onclick = function() {
		gear1RPress = !gear1RPress;
		gear2RPress = false;
		gear3RPress = false;
	}

	document.getElementById("Gear2R").onclick = function() {
		gear1RPress = false;
		gear2RPress = !gear2RPress;
		gear3RPress = false;
	}

	document.getElementById("Gear3R").onclick = function() {
		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = !gear3RPress;
	}

	document.getElementById("ShooterR").onclick = function() {
		shooterRPress = !shooterRPress;
	}
//-------------------------------------------------------------------------------------------\\
	document.getElementById("StartPosition1B").onclick = function() {
		start1BPress = !start1BPress;
		start2BPress = false;
		start3BPress = false;

		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = false;

		start1RPress = false;
		start2RPress = false;
		start3RPress = false;

		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = false;
	}

	document.getElementById("StartPosition2B").onclick = function() {
		start1BPress = false;
		start2BPress = !start2BPress;
		start3BPress = false;

		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = false;

		start1RPress = false;
		start2RPress = false;
		start3RPress = false;

		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = false;
	}

	document.getElementById("StartPosition3B").onclick = function() {
		start1BPress = false;
		start2BPress = false;
		start3BPress = !start3BPress;

		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = false;

		start1RPress = false;
		start2RPress = false;
		start3RPress = false;

		gear1RPress = false;
		gear2RPress = false;
		gear3RPress = false;
	}

	document.getElementById("Gear1B").onclick = function() {
		gear1BPress = !gear1BPress;
		gear2BPress = false;
		gear3BPress = false;
	}

	document.getElementById("Gear2B").onclick = function() {
		gear1BPress = false;
		gear2BPress = !gear2BPress;
		gear3BPress = false;
	}

	document.getElementById("Gear3B").onclick = function() {
		gear1BPress = false;
		gear2BPress = false;
		gear3BPress = !gear3BPress;
	}

	document.getElementById("ShooterB").onclick = function() {
		shooterBPress = !shooterBPress;
	}

	document.getElementById("Compile").onclick = function() {
		writeCode();
		//WriteFile();
	}
}