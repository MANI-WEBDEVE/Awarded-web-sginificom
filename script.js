
gsap.to(".video-div", {
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: 5,
      pin: true,
    },
    "--clip": '0%',
    duration: 2,
    ease: "ease-in-out",
})







