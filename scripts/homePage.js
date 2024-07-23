// Select cursor elements
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


const cursorDot = document.getElementById("cursor_dot");
const cursorOutline = document.getElementById("cursor_outline");

// Add event listener for mouse movement
window.addEventListener("mousemove", function(e) {
    // Get mouse coordinates
    const posX = e.clientX;
    const posY = e.clientY;

    // Update cursor position
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.animate({
        left : `${posX}px`,
        top :`${posY}px`
    },{duration:300,fill:"forwards"})
});
document.addEventListener("DOMContentLoaded", function() {
    // Animation for #hello element
    gsap.from("#hello", {
        duration: 1,
        x: -700
    });

    gsap.from(".highlight", {
        duration: 1,
        y: 700
    });
    gsap.from("#mainCard",{
        duration:2,
        x:-1500,
        // delay:1.5
    })
    const explainAbout = document.getElementById('explainAbout');

    // Use GSAP to create a fade-in animation with scale
    gsap.fromTo(explainAbout, {
        opacity: 0, // Start with opacity 0 (fully transparent)
        scale: 0.9 // Start with a slightly smaller scale
    }, {
        opacity: 1, // End with opacity 1 (fully opaque)
        scale: 1, // End with normal scale
        // delay:2,
        duration: 1.5, // Animation duration (in seconds)
        ease: "power1.out" // Easing function (optional)
    });
    
    
});
document.addEventListener("DOMContentLoaded", function() {
    const helloElement = document.getElementById("hello");
    const b = baffle(helloElement);

    
    helloElement.innerHTML = 'வணக்கம் <span class="highlight">நண்பர்களே,</span>';

   
    setTimeout(() => {
        b.set({
            // characters: '@#$!Q▒░▒░▒░▒█▓█ ▒▓█ ▓▒░ ▓█▒ ▓░▒ ▒░▓ ░█▓ ░█▒ ▒▓░ ░▒▒ ░▓▒*%$(#@*!H*)(^$*E*()^&!@$#LLO',
            characters: 'H!@*E!@*L^*L!@*O!@* ░▒░▒░▒█▓█ ▒▓█ ▓▒░ ▓█▒ ▓░▒ ▒░▓ ░█▓ ░█▒ ▒▓░ ░▒▒ ░▓▒ T!@*H!@*E!@*R!@*E!',
            speed: 100
        });

        b.start();
        b.reveal(1500, 1500); 

       
        setTimeout(() => {
            helloElement.innerHTML = 'Hello <span class="highlight">There,</span>';
            b.stop(); 
        }, 1500); 
    }, 3500); 
});

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        lerp: 0.05
    });

    // Handle smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                scroll.scrollTo(targetElement);
            }
        });
    });
});
