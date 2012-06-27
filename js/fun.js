/**
 * @author Darkfalcon
 */

window.onload = init;

function init() {
	alert("accessing the data");
	var fido = new Dog("Fido", "Mixed", 40);
	fido.bark();
}

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if (this.weight > 8) {
			alert(this.name + " says Wof!");
		} else {
			alert(this.name + " says Wip!");
		}
	};
}

