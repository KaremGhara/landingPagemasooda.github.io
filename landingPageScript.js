// Get references to the navigation links
const aboutUsLink = document.querySelector(".top-nav-links li:nth-child(1) a");
const featuresLink = document.querySelector(".top-nav-links li:nth-child(2) a");
const contactLink = document.querySelector(".top-nav-links li:nth-child(3) a");

// Get references to the target sections
const aboutUsSection = document.getElementById("about-us");
const featuresSection = document.getElementById("features");
const contactSection = document.getElementById("contact");

// Function to scroll smoothly to a section
function scrollToSection(section) {
	window.scrollTo({
		behavior: "smooth",
		top: section.offsetTop,
	});
}

// Add click event listeners to the navigation links
aboutUsLink.addEventListener("click", function (event) {
	event.preventDefault();
	scrollToSection(aboutUsSection);
});

featuresLink.addEventListener("click", function (event) {
	event.preventDefault();
	scrollToSection(featuresSection);
});

contactLink.addEventListener("click", function (event) {
	event.preventDefault();
	scrollToSection(contactSection);
});
