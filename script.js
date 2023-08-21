gsap.to(".video", {
    scale: 1,
    opacity: 1,
    duration: 1,
 
    filter: "blur(20px)",
    scrollTrigger: {
        trigger: ".video",
        scroller: "body",
        start: "bottom 95%",
       
        scrub: true,
        // markers:true,
    }
});
gsap.from(".section-1", {
    // x: -100,
    x:-10,
    delay: 1,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-1",
        scroller: "body",
        start: "bottom 130%",
        end: "top 0",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-2 .pic", {
    x: -100,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "bottom 140%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-2 .text", {
    // x: 200,
    x:130,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "bottom 140%",
        end: "top 0",
        scrub: true,
        // markers: true,
    }
});

gsap.from(".section-3 .card-1", {
    x: -100,
    delay: 1,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-3 .card-1",
        scroller: "body",
        start: "bottom 110%",
        end: "top 0",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-3 .card-2", {
    // x: 200,
    x:130,
    delay: 1,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-3 .card-1",
        scroller: "body",
        start: "bottom 110%",
        end: "top 0",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-4 .right", {
    // x: 200,
    // x:120,
    x:0,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-4 .right",
        scroller: "body",
        start: "bottom 140%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-4 .left", {
    x: -100,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-4 .left",
        scroller: "body",
        start: "bottom 140%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-5 .part-1", {
    x: -100,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-5 .part-1",
        scroller: "body",
        start: "bottom 100%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-5 .part-2", {
    // x: 200,
    x:120,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-5 .part-2",
        scroller: "body",
        start: "bottom 100%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-5 .part-3", {
    x: -100,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-5 .part-3",
        scroller: "body",
        start: "bottom 100%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.from(".section-5 .part-4", {
    // x: 200,
    x:120,
    delay: 1,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-5 .part-4",
        scroller: "body",
        start: "bottom 100%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});
gsap.to(".section-6 #Mystery", {
    scale: 1,
    opacity: 1,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: ".section-6 #Mystery",
        scroller: "body",
        start: "top 100%",
        end: "top 20",
        scrub: true,
        // markers: true,
    }
});


