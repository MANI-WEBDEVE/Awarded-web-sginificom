gsap.set(".all-rows", { scale: 10 });
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom top",
    scrub: 5,
    pin: true,
  },
});

tl.to(
  ".video-div",
  {
    "--clip": "0%",
    ease: "ease-in-out",
  },
  "animate"
)
  .to(
    ".all-rows",
    {
      scale: 1,
      ease: "ease-in-out",
    },
    "animate"
  )
  .to(
    ".row1",
    {
      // Transform: "translateX(80%)",
      x: "-20%",
      stagger: true,
      ease: "ease-in-out",
    },
    "animate"
  )
  .to(
    ".lft",
    {
      // Transform: "translateX(80%)",
      xPercent: -20,
      stagger: true,
      stagger: 0.03,
      ease: "ease-in-out",
    },
    "row-animate"
  )
  .to(
    ".rgt",
    {
      // Transform: "translateX(80%)",
      xPercent: 20,
      stagger: 0.03,
      stagger: true,
      ease: "ease-in-out",
    },
    "row-animate"
  );
