// 1. Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             if(nav.classList.contains('nav-active')) {
                 nav.classList.remove('nav-active');
                 burger.classList.remove('toggle');
             }
        });
    });
}
navSlide();


// 2. GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".fade-in", {
    y: 30,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.utils.toArray('.fade-up').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});
