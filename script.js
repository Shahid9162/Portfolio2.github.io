// Ham Icon Function
let hamIcon = document.querySelector("#menu");
hamIcon.addEventListener("click", openMenu);
let crossIcon = document.querySelector("#cross");
crossIcon.addEventListener("click", closeMenu);
let sideMenu = document.querySelector("#side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

// Typing Effect
let typingEffect = new Typed(".typedText", {
  strings: ["Frontend Developer.", "Web Developer."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1500,
  reset: true,
});
// Homepage
sr.reveal(".left", {});
sr.reveal(".right", { delay: 100 });
sr.reveal(".skillThree", { delay: 400 });
sr.reveal(".skillFive", { delay: 1000 });
// Scroll Reveal Skills
const skillRev1 = ScrollReveal({
  origin: "left",
  distance: "300px",
  duration: 1500,
  reset: true,
});
skillRev1.reveal(".skillOne", {});
skillRev1.reveal(".skillSix", { delay: 200 });
skillRev1.reveal(".contact-left", {});

const skillRev3 = ScrollReveal({
  origin: "bottom",
  distance: "300px",
  duration: 1500,
  reset: true,
});
skillRev3.reveal(".skillFour", { delay: 600 });
skillRev3.reveal(".skillTwo", { delay: 800 });
skillRev3.reveal(".contact-right", { delay: 300 });
