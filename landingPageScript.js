// Function to scroll smoothly to a section
function scrollToSection(section) {
  window.scrollTo({
    behavior: "smooth",
    top: section.offsetTop,
  });
}

// Function to add click event listener to a link
function addSmoothScrolling(link, section) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection(section);
  });
}

// Get references to the navigation links
const topAboutUsLink = document.querySelector(
  ".top-nav-links li:nth-child(1) a"
);
const topFeaturesLink = document.querySelector(
  ".top-nav-links li:nth-child(2) a"
);
const topContactLink = document.querySelector(
  ".top-nav-links li:nth-child(3) a"
);

// Get references to the bottom navigation links
const bottomAboutUsLink = document.querySelector(
  ".contact-section_nav-links li:nth-child(1) a"
);
const bottomFeaturesLink = document.querySelector(
  ".contact-section_nav-links li:nth-child(2) a"
);
const bottomContactLink = document.querySelector(
  ".contact-section_nav-links li:nth-child(3) a"
);
const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

menuToggle.addEventListener("click", function () {
  topNav.classList.toggle("active");
});
// Get references to the target sections
const aboutUsSection = document.getElementById("about-us");
const featuresSection = document.getElementById("features");
const contactSection = document.getElementById("contact");

// Add click event listeners for both top and bottom navigation links
addSmoothScrolling(topAboutUsLink, aboutUsSection);
addSmoothScrolling(topFeaturesLink, featuresSection);
addSmoothScrolling(topContactLink, contactSection);
addSmoothScrolling(bottomAboutUsLink, aboutUsSection);
addSmoothScrolling(bottomFeaturesLink, featuresSection);
addSmoothScrolling(bottomContactLink, contactSection);
