var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('Gradient');

var gradient1 = "color1.value";
var gradient2 = "color2.value";

// body.style.background = ("to right, color1.value, color2.value")



function addColors() {
	body.style.background = 
	"linear-gradient(to right," + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", addColors)

color2.addEventListener("input", addColors)
