//image rotator javascript file

//gets image element from HTML doc
var catImages = document.getElementById("images")

//sets values for the array and initializes first cat image
var catArray = ["images/cat1.jpg","images/cat2.jpg","images/cat3.jpg","images/cat4.jpg","images/cat5.jpg"];
var i = 0;

//changes the cat image
function changeImage() {
	i++
	if(i == catArray.length) {
	i = 0; 
	}
	document.getElementById("images").src = catArray[i];
}

// rotates the image on mouse click
function onClick() {
	document.getElementById("images").onclick = changeImage;	
}



// call function when page loads
window.onload = onClick;



	
	