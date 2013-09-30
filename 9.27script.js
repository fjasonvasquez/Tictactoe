var isXTurn = true;
var board = [["","",""],["","",""],["","",""]];


function clickDiv(){
	if (event.target.innerHTML != "")
		return;
	if (isXTurn)
		moveLetter = "X";
	else
		moveLetter = "O";

	board[(event.target.id[4]) - 1][(event.target.id[6]) - 1]
	=moveLetter

	isXTurn = !isXTurn;



	alert(event.target);
//for(evtThing in event)
//   alert(evtThing);
}


function pageLoaded() {
	var squares = document.getElementsByClassName("sqr").forEach();
	for(i=0;i<squares.length;++i)
		squares[i].onclick = clickDiv;
}

