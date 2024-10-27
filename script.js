
const homePageAnimation = () => {
  gsap.set(".all-rows", { scale: 10 });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: 5,
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
};
homePageAnimation()

const cardAnimations = () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      start: "top top",
      end: "bottom top",
      scrub: 5,
      marker: true,
      pin: true,
    },
  });

  tl2.from(".textl", {
    opacity: 0,
    ease: "ease-in-out",
    y: 100,
    stagger: 1,
  });
  document.querySelectorAll(".card").forEach((el) => {
    tl2.from(el, {
      opacity: 0,
      ease: "ease-in-out",
      y: 100,
      scale: 0.5,
    });
  });
};
cardAnimations();

const slidesAniamtion = () => {
  gsap.to(".slide", {
    scrollTrigger:{
      trigger: ".real",
      start: "top top",
      end: "bottom bottom ",
      marker: true,
      scrub: 5,
    },
    xPercent: -200,
    ease: "ease-in-out",
  })
}
slidesAniamtion()

function listAnimation() {
  document.querySelectorAll(".listElem").forEach((el) => {
    el.addEventListener("mousemove",function(e) {
     const movingAnationTrcike = gsap.utils.mapRange(0,window.innerWidth,-200, 200, e.clientX)
     const blueLayer = this.querySelector(".blue-layer")
      const pictureElem = this.querySelector(".picture")
      gsap.to(pictureElem, {
        opacity: 1,
        x: movingAnationTrcike,
        ease: "ease-in-out",
       
      })
      gsap.to(blueLayer, {
        height: "100%",
        ease: "ease-in-out",
       
      })
    })
    el.addEventListener("mouseleave", function(e){
      const blueLayer = this.querySelector(".blue-layer")
      const pictureElem = this.querySelector(".picture")
      gsap.to(pictureElem, {
        opacity: 0,
        ease: "ease-in-out",
      })
      gsap.to(blueLayer, {
        height: "0%",
        ease: "ease-in-out",
      })
    })
  });
}
listAnimation()

const wordAnimations = () => {
  let clutter= ""
  const para = document.querySelector(".text-para")
  const words = para.textContent.split("").forEach((el) => {
    if(el === " ") clutter += `<span >&nbsp</span>`
    clutter += `<span>${el}</span>`
  })
  document.querySelector(".text-para").innerHTML = clutter
  gsap.set(".text-para span", {
    opacity: 0.1,
  })
  gsap.to(".text-para span", {
    scrollTrigger: {
      trigger: ".firstEmply",
      start: "top 40%",
      end: "bottom 90%",
      scrub: 3,
    },
    opacity: 1,
    ease: "ease-in",
    stagger: 0.1,
    duration: 1,
  })
}
wordAnimations();