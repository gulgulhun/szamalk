var temp = 0;

function myFunction(){
	var text;
	if (temp==0)	{
	text = "Paragraph is changed.";
	temp=1;
	}else text = "Paragraph is changed the second time";//ide még nem ugrik be, mivel a temp minden egyes gomnyomásnál deklarálódik
	document.getElementById("demo").innerHTML = text;
}

function ProbaFunct(){
	document.getElementById("potroh").innerHTML = "A lábléc szövege megváltozik azáltal, hogy rávisszük az egeret a fejlécre. Ez csak egy próba, kiváncsi vagyok, hogy mennyire működik a dolog.";
}
function ProbaFunct2(){
	document.getElementById("potroh").innerHTML = "<h5> 2016 - Tom-Tom &copy;</h5>";
}
function ProbaFunct3(){
	document.getElementById("potroh").innerHTML = "<h5>Most ráklikkeltem, és úgy változtattam meg a láblécet :)</h5>";
}
function ProbaFunct4(){//az onload nem feltétlenül akar működni
	var d = new Date();
	document.getElementById("potroh").innerHTML = "<h5> "+(d.getFullYear() - 5)+" - Tom-Tom &copy;</h5>";
}

var hanyadik=0;
function Cucc(){
	hanyadik++;
	if (hanyadik == 5) hanyadik=0;
	if (hanyadik==0) document.getElementById("Eltunhet").innerHTML = "<p>Pellentesque in neque sit amet velit blandit tempus. Etiam sollicitudin vitae mi et tincidunt. Proin lorem turpis, consequat vitae purus non, aliquam laoreet ipsum. Mauris sodales pellentesque metus eu maximus. Vivamus in metus a tellus venenatis sollicitudin. Donec nec arcu felis. Sed at varius enim. Duis ac tempor dui. Aliquam vitae dui vitae tellus sollicitudin dapibus. Fusce mollis ante ornare maximus eleifend. Curabitur eget pellentesque turpis, sit amet mattis metus. Nunc tincidunt, dui et semper placerat, odio diam fermentum felis, a gravida purus augue eu elit. Nulla pulvinar lectus in lacus aliquet viverra. Nam et arcu ut dui maximus venenatis. Nulla ultrices quam a dictum egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in neque sit amet velit blandit tempus. Etiam sollicitudin vitae mi et tincidunt. Proin lorem turpis, consequat vitae purus non, aliquam laoreet ipsum. Mauris sodales pellentesque metus eu maximus. Vivamus in metus a tellus venenatis sollicitudin. Donec nec arcu felis. Sed at varius enim. Duis ac tempor dui. Aliquam vitae dui vitae tellus sollicitudin dapibus. Fusce mollis ante ornare maximus eleifend. Curabitur eget pellentesque turpis, sit amet mattis metus. Nunc tincidunt, dui et semper placerat, odio diam fermentum felis, a gravida purus augue eu elit. Nulla pulvinar lectus in lacus aliquet viverra. Nam et arcu ut dui maximus venenatis. Nulla ultrices quam a dictum egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
	else if (hanyadik==1) document.getElementById("Eltunhet").innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit tincidunt justo eget iaculis. Duis in iaculis libero, malesuada condimentum magna. Nullam maximus arcu vitae mollis blandit. Maecenas sit amet consectetur mi. Maecenas in metus lacus. Nullam ac condimentum nunc, vitae posuere arcu. In hac habitasse platea dictumst. Fusce ut consequat enim. Aenean in quam et elit mattis consectetur. Suspendisse dictum ultrices erat, sed ultricies dui. Nam efficitur sapien quis auctor hendrerit.Quisque vel nisi vitae orci congue varius. Donec volutpat metus nec erat gravida tempus. Sed sit amet condimentum purus. Morbi massa augue, accumsan eu lobortis ac, eleifend sed erat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse quis varius massa. Nam tempor sem non congue lobortis. Morbi augue tortor, vestibulum hendrerit accumsan eu, rhoncus sit amet lorem. Cras nec volutpat quam, sit amet tempus nulla. Nunc ligula nisi, porttitor iaculis neque non, maximus vehicula nisi.</p>";
	else if (hanyadik==2) document.getElementById("Eltunhet").innerHTML = "<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lobortis gravida risus ac iaculis. Donec facilisis quis ligula quis congue. Suspendisse pulvinar, enim vel ornare accumsan, lectus augue lobortis est, eu suscipit lectus nunc eu ligula. Integer quis justo rhoncus, tempor dolor sed, faucibus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac nibh a orci vulputate placerat vel ac purus. Suspendisse ac blandit ipsum. Nunc pulvinar turpis at fringilla elementum. Phasellus lectus nisi, tristique eu ligula vitae, rhoncus euismod sapien. Nunc vitae magna rutrum, volutpat ipsum ut, rutrum quam. Nunc mattis tempus enim, vel fermentum lacus finibus quis. Fusce eu tristique nisi. Sed ac sagittis felis, ut vulputate ante. Suspendisse nulla urna, eleifend eget mollis vel, ornare id nisl. Curabitur sit amet convallis ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper rhoncus congue. Donec porttitor faucibus nisi ut feugiat. Curabitur interdum gravida ligula, ut porttitor lacus iaculis sed. Vivamus eu massa eu diam commodo elementum. Phasellus arcu augue, tempus eget mauris ut, aliquam semper diam. Suspendisse tincidunt eget eros fringilla feugiat. Integer rutrum facilisis tellus ac elementum. Vivamus finibus vehicula metus tristique semper. Duis sit amet est vel ipsum efficitur varius. Duis pulvinar tristique pharetra. Aenean tincidunt mauris eu mi accumsan, quis aliquam leo hendrerit. Mauris tincidunt lorem non libero mollis luctus. Suspendisse potenti.</p>";
	else if (hanyadik==3) document.getElementById("Eltunhet").innerHTML = "<p>Sed eget auctor ipsum, in accumsan ligula. Quisque aliquet turpis nec varius cursus. Sed dictum id nunc et fringilla. Etiam vitae dui quis tellus tristique vehicula. Fusce quis pulvinar nisl. Curabitur at nisl nec sem bibendum ultrices a ut risus. Vivamus eget blandit quam. Vivamus at tortor dui. Suspendisse est justo, aliquet quis dapibus viverra, ultrices at lacus. Vestibulum lobortis dolor sem, sit amet sagittis tellus tincidunt non. Curabitur leo turpis, molestie vel magna ac, volutpat commodo eros. Ut neque enim, commodo eu diam id, pellentesque vehicula ipsum. Sed sed pellentesque eros, a faucibus enim.Praesent nec faucibus sapien. Nulla semper suscipit fermentum. Morbi luctus quam eros, ac dapibus eros pretium nec. Sed nec ante eu elit efficitur commodo eget id elit. Sed viverra ut ante ut imperdiet. Curabitur vestibulum, sapien vel iaculis suscipit, risus turpis accumsan velit, at eleifend mi massa et neque. Ut vulputate eget urna eu bibendum.</p>";
	else document.getElementById("Eltunhet").innerHTML = "<p>Aenean eu velit mi. Praesent a ligula odio. Aenean dictum, tortor non condimentum pulvinar, ex odio tempor purus, eu iaculis sapien lorem in neque. Mauris in porttitor enim, sit amet commodo justo. Phasellus molestie urna at magna faucibus egestas. Duis scelerisque rhoncus turpis, nec dapibus elit. Nulla facilisi. Mauris eget mi mattis, maximus odio id, aliquam diam. Donec finibus non quam dictum congue. Ut ipsum ipsum, vulputate ut sodales rhoncus, consectetur congue erat. Vestibulum a nisl a orci suscipit hendrerit. Integer porta feugiat nulla, eu dictum risus convallis varius. Pellentesque ac est a ligula volutpat cursus.Aenean massa nisi, tristique sed luctus dapibus, vehicula quis metus. Aenean sodales velit vel quam tristique luctus sit amet sit amet ex. Duis eleifend massa vitae dolor blandit euismod. Ut ut neque a arcu molestie suscipit. Nam turpis massa, mattis quis neque sit amet, auctor pretium dui. Sed molestie in enim vitae scelerisque. Morbi at sem eu lacus semper consequat. Sed et magna eu ex fringilla dictum ultricies at urna. Nulla facilisi.</p>";
}

function Eltunik(){
	document.getElementById("elfogtunni").style.display = "none";
	//document.getElementById("elfogtunni").style.color = "red";
}

//window.alert(5 + 6);

document.getElementById("proba").innerHTML = 5 + 6;