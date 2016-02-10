var hanyadik = 0;
function Right(){
	hanyadik++;
	if (hanyadik == 4) hanyadik=0;
	if (hanyadik == 0) document.getElementById("slider").innerHTML = "<img src=\"img/1.png\" alt=\"egy\">";
	else if (hanyadik == 1) document.getElementById("slider").innerHTML = "<img src=\"img/2.png\" alt=\"kettő\">";
	else if (hanyadik == 2) document.getElementById("slider").innerHTML = "<img src=\"img/3.png\" alt=\"három\">";
	else document.getElementById("slider").innerHTML = "<img src=\"img/4.png\" alt=\"négy\">";
}
function Left(){
	hanyadik--;
	if (hanyadik == -1) hanyadik=3;
	if (hanyadik == 0) document.getElementById("slider").innerHTML = "<img src=\"img/1.png\" alt=\"egy\">";
	else if (hanyadik == 1) document.getElementById("slider").innerHTML = "<img src=\"img/2.png\" alt=\"kettő\">";
	else if (hanyadik == 2) document.getElementById("slider").innerHTML = "<img src=\"img/3.png\" alt=\"három\">";
	else document.getElementById("slider").innerHTML = "<img src=\"img/4.png\" alt=\"négy\">";
}

var elements = document.getElementsByClassName("slider_staff");
var scount = 0;


function slideRight(){
	scount++;
	if (scount == 4) scount = 0;
	if (scount == 0){
		elements[3].id = "hidden";
		elements[0].id = "left";
		elements[1].id = "right";
	}
	else if (scount == 1){
		elements[0].id = "hidden";
		elements[1].id = "left";
		elements[2].id = "right";
	}
	else if (scount == 2){
		elements[1].id = "hidden";
		elements[2].id = "left";
		elements[3].id = "right";
	}
	else if (scount == 3){
		elements[2].id = "hidden";
		elements[3].id = "left";
		elements[0].id = "right";
	}
}
function slideLeft(){
	scount--;
	if (scount == -1) scount = 3;
	if (scount == 0){
		elements[2].id = "hidden";
		elements[1].id = "right";
		elements[0].id = "left";
	}
	else if (scount == 1){
		elements[3].id = "hidden";
		elements[2].id = "right";
		elements[1].id = "left";
	}
	else if (scount == 2){
		elements[0].id = "hidden";
		elements[3].id = "right";
		elements[2].id = "left";
	}
	else if (scount == 3){
		elements[1].id = "hidden";
		elements[0].id = "right";
		elements[3].id = "left";
	}
}