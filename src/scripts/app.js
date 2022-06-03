import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".balle", { 
    duration: 1.5, 
    ease: "bounce.out",
    x: -2500,
    scrollTrigger:{
        trigger:".section--marque",
        start:"center bottom",
        markers: true,
    },
});

gsap.from(".balle--v2",{
    duration: 1, 
    ease: "bounce.out",
    y: -400,
    opacity:0,
    scrollTrigger:{
        trigger:".section--choix",
        start:"top top",
        markers: true,
    },
});

gsap.from(".section--choix .fond--image", {
    opacity: 0.2,
    duration: 0.5,
    x: -500,
    scrollTrigger:{
        trigger:".section--choix",
        start:"center bottom",
        markers: true,
    },
});