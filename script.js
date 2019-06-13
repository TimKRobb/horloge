var moveHands = function() {
	var now = new Date(),
		s = now.getSeconds();
		sAngle = 270 + (s*6),
		m = now.getMinutes(),
		mAngle = 270 + (m*6) + (s*0.1),
		h = now.getHours()%12,
		hAngle = 270 + (h*30) + (m*0.5) + (s*(0.5/60)),
		secondsHand = document.getElementById("seconds"),
		minutesHand = document.getElementById("minutes"),
		hoursHand = document.getElementById("hours");
	secondsHand.style.transform = "rotate("+sAngle+"deg)";
	minutesHand.style.transform = "rotate("+mAngle+"deg)";
	hoursHand.style.transform = "rotate("+hAngle+"deg)";
}

moveHands();

setInterval(moveHands,1000);