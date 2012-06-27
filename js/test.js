/**
 * @author Darkfalcon
 */
window.onload = init;

function init() {
	//var button = document.getElementById("addTel");
	//button.onclick = addTelHandler;
	var getTelc = document.getElementById("telInput");
	getTelc.onkeyup = addTelHandler;
}

function  addTelHandler() {
	var getTel = document.getElementById("telInput");
	var telP = document.getElementById("tel");
	telefono = getTel.value;
	telP.innerHTML = telefono + " ";
}

