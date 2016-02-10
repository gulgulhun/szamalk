var elements = document.getElementsByClassName("slider_staff"),
    scount = 0,
    timer;

folytat();

function leall(){
	clearInterval(timer);
}

function folytat(){
	timer = setInterval(function() {  slideRight(); }, 3000);
}

function slideRight(){
	scount++;
	if (scount === elements.length) scount = 0;
	for (var i = 0; i < elements.length; i++)
	{
		var j = 0;
		if (scount === i){
			if (i - 1 < 0) j = elements.length - 1;
			else j = i - 1;
			elements[j].id = "hidden";
			elements[i].id = "left";
			if (i === elements.length - 1) j = 0;
			else j = i + 1;
			elements[j].id = "middle";
			if (i === elements.length - 2) j = 0;
			else if (i === elements.length - 1) j = 1;
			else j = i + 2;
			elements[j].id = "right";
		}
	}
}

function slideLeft(){
	scount--;
	if (scount === -1) scount = elements.length - 1;
	for (var i = 0; i < elements.length; i++)
	{
		var j = 0;
		if (scount === i){
			if (i === elements.length - 3) j = 0;
			else if (i === elements.length - 2) j = 1;
			else if (i === elements.length - 1) j = 2;
			else j = i + 3;
			elements[j].id = "hidden";
			if (i === elements.length - 2) j = 0;
			else if (i === elements.length - 1) j = 1;
			else j = i + 2;
			elements[j].id = "right";
			if (i === elements.length - 1) j = 0;
			else j = i + 1;
			elements[j].id = "middle";
			elements[i].id = "left";
		}
	}
}
