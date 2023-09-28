const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	}
];

//CONSTANTES
const ArrowBtnRight = document.querySelector(".arrow_right");
const ArrowBtnLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");

//check if we are on the last slide 
const lastSlide = slides.length - 1;

const imageSlide = document.querySelector(".banner-img");

const baseUrl = "./assets/images/slideshow/";

const tagline = document.getElementById("tagLine");

let slideCourant = 0;


// add dot selected class to the elements with dot class

// ******** Ajoutez des bullet points au slider ******** //

for (let i = 0; i < slides.length; i++) {
	const dotDiv = document.createElement("div");
	dotDiv.className = "dot";
	dots.appendChild(dotDiv);
}
let allDots = document.querySelectorAll(".dot");
allDots[0].classList.add("dot_selected"); 

// ********** event listener des fleches *********** //

// ************ fleche droite *********************//

ArrowBtnRight.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la fleche droite")

	allDots[slideCourant].classList.remove("dot_selected");

	if (slideCourant === lastSlide) {
		slideCourant = 0; 
	} else {
		slideCourant++;
		console.log(slideCourant)
	};
	
	imageSlide.src = baseUrl + slides[slideCourant].image;
	tagline.innerHTML = slides[slideCourant].tagLine;

	allDots[slideCourant].classList.add("dot_selected");
});

//************ fleche gauche *********************//

ArrowBtnLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la fleche gauche")

	allDots[slideCourant].classList.remove("dot_selected");

	if (slideCourant === 0) {
		slideCourant = 3;
		} else {
			slideCourant--;
			console.log(slideCourant)
		};
	
	imageSlide.src = baseUrl + slides[slideCourant].image;
	tagline.innerHTML = slides[slideCourant].tagLine;

	allDots[slideCourant].classList.add("dot_selected");
});





