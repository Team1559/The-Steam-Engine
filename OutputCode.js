function writeCode() {
	var txtfile = "C:/Users/John/Documents/TheEngine/Output.txt";
	var file = new File([""], txtfile);
	var text;

	if (start1RPress) {
		text = new Blob(["START1R"], { type: "text/plain" });
		file.write();
	} else if (start2RPress) {
		text = new Blob(["START2R"], { type: "text/plain" });
	} else if (start3RPress) {
		text = new Blob(["START3R"], { type: "text/plain" });
	} else if (start1BPress) {
		text = new Blob(["START1B"], { type: "text/plain" });
	} else if (start2BPress) {
		text = new Blob(["START2B"], { type: "text/plain" });
	} else if (start3BPress) {
		text = new Blob(["START3B"], { type: "text/plain" });
	}

	if (gear1RPress) {
		text = new Blob(["GEAR1R"], { type: "text/plain" });
	} else if (gear2RPress) {
		text = new Blob(["GEAR2R"], { type: "text/plain" });
	} else if (gear3RPress) {
		text = new Blob(["GEAR3R"], { type: "text/plain" });
	} else if (gear1BPress) {
		text = new Blob(["GEAR1B"], { type: "text/plain" });
	} else if (gear2BPress) {
		text = new Blob(["GEAR2B"], { type: "text/plain" });
	} else if (gear3BPress) {
		text = new Blob(["GEAR3B"], { type: "text/plain" });
	}

	if (shooterRPress) {
		text = new Blob(["BOILERR"], { type: "text/plain" });
	} else if (shooterBPress) {
		text = new Blob(["BOILERB"], { type: "text/plain" });
	}
}