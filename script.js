//grab form
var form = document.querySelector("form");

form.addEventListener("submit", addMeme);

function addMeme(element) {
	element.preventDefault();

	var input_top = document.getElementById("top-text-input").value;
	var input_bottom = document.getElementById("bot-text-input").value;
	var file = document.getElementById("img-url").value;

	var img = document.createElement("img");
	//img.setAttribut("class", "image-class");
	img.src = file;
	img.width = 600;
	img.height = 600;
	//img.setAttribute("onmouseover", mouseOn());
	//img.setAttribute("onclick", closeImage());
	//document.body.appendChild(img);
	document.getElementById("below-form-id").appendChild(img);

	var p1 = document.createElement("P");
	p1.setAttribute("class", "output-text-top");
	var t1 = document.createTextNode(input_top);
	p1.appendChild(t1);
	document.getElementById("below-form-id").appendChild(p1);

	var p2 = document.createElement("P");
	p2.setAttribute("class", "output-text-bottom");
	var t2 = document.createTextNode(input_bottom);
	p2.appendChild(t2);
	document.getElementById("below-form-id").appendChild(p2);

	form.reset();
}

function closeImage() {
	document.queryselector("img").className += " hidden";
}

function mouseOn() {
	<img
		src="http://nontalk.s3.amazonaws.com/overlay.png"
		class="overlay"
		width="600"
		height="600"
	/>;
}

