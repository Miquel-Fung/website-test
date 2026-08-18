clickMe.onclick = () => {
        const fart = new Audio("assets/dry-fart.mp3");
	console.log("fart");
	fart.currentTime = 0;
	fart.play();
}
