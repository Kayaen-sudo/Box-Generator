function boxes() {
	var right = 0;
	var bottom = 0;
	var boxColor;
	var colors = ["red", "blue", "purple", "yellow", "gray", "green", "pink", "orange"];
	for (var i = 1; i < 100; i++) {
		boxColor = document.createElement("div");
		boxColor.classList.add('box')
		boxColor.style.bottom = bottom + 'px';
		boxColor.style.right = right + 'px';
		boxColor.style.backgroundColor = colors[Math.floor(Math.random() * 8)];
		boxColor.addEventListener('mouseover', removeBoxes);
		container.append(boxColor);
		right = right + 200;
		if (i % 9 == 0) { right = 0; bottom = bottom + 70; }	
		else if (i == 1) {
			window.alert("last child!"); 
		}
	}
}

window.onload = function() {
	boxes();
}

function removeBoxes() {
	this.remove();
	('container').on('mouseover', removeBoxes);
}



