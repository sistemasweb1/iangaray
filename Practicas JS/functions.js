// E1
function myFunction(){
	alert("Hello World!");
}
myFunction();

// E2
function myFunction(){
	alert("Hello World!");
}

// E3
function myFunction(){
	return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

// E4
function myFunction(){
	document.getElementById("demo").innerHTML = "Hello"
}