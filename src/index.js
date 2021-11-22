import "./styles/style.css";

window.addEventListener("load", () => {
	setIcons("CLEAR", document.querySelector(".icon"));

	function setIcons(icon, iconID) {
		const skycons = new Skycons({ color: "white" });
		skycons.play();
		return skycons.set(iconID, Skycons[icon]);
	}
});
