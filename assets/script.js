const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	}
];
let slideCourant = 0;

document.addEventListener('DOMContentLoaded', function () {


slideSelected = slides[slideCourant];

// ******** Ajoutez des bullet points au slider ******** //

let dotselectedimage = document.getElementById("dot_selected_image");
dotselectedimage.classList.add("dot_selected");

// ********** event listener des fleches *********** //



let arrowbtnright = document.getElementById("arrow_btn_right");
arrowbtnright.addEventListener("click", function () {
	slideCourant++;
	console.log("Vous avez cliqué sur la fleche droite")
	console.log(slideCourant)

	if (slideCourant >= slides.length) {
		slideCourant = 0; // Revenir au début si nécessaire
	  }
	  slideSelected = slides[slideCourant];
	});

	let arrowbtnleft = document.getElementById("arrow_btn_left");
arrowbtnleft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le fleche gauche")
});
});







