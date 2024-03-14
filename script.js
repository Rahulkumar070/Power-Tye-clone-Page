const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.05,
});

gsap.from("#page h1", {
  x: 300,
  scrub: 5,
  duration: 1.5,
  scale: 0.1,
});

gsap.from("#image img", {
  x: 300,
  scrub: 3,
  duration: 1.5,
});

gsap.from("#discover ", {
  x: 300,
  duration: 3,
});

gsap.from("body", {
  x: 400,
  duration: 2,
  opacity: 0.5,
  scale: 0.5,
});
