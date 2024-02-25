let typingEffect = new Typed(".project1", {
  strings: ["Registration Form"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
let typingEffect1 = new Typed(".project2", {
  strings: ["Rock Paper Scissor"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
let typingEffect2 = new Typed(".project3", {
  strings: ["Unit Converter"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
const sr = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 3000,
  reset: true,
});
sr.reveal(".first-project", {});
sr.reveal(".third-project", { delay: 700 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 3000,
  reset: true,
});
srRight.reveal(".second-project", { delay: 400 });
