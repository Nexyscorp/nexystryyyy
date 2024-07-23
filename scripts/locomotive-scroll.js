// locomotive-scroll.js

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

    // Custom cursor movement
    let cursorPosition = { x: 0, y: 0 };
    let cursorVisible = false;
    let cursorScale = 1;

    function updateCursorPosition(e) {
        cursorPosition.x = e.clientX;
        cursorPosition.y = e.clientY;
    }

    function updateCursor() {
        if (!cursorVisible) {
            cursorDot.style.opacity = 1;
            cursorOutline.style.opacity = 1;
            cursorVisible = true;
        }

        cursorDot.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) scale(${cursorScale})`;
        cursorOutline.style.transform = `translate3d(${cursorPosition.x - 15}px, ${cursorPosition.y - 15}px, 0) scale(${cursorScale})`;
    }

    document.addEventListener('mousemove', (e) => {
        updateCursorPosition(e);
        updateCursor();
    });

    document.addEventListener('mouseenter', () => {
        cursorVisible = true;
        updateCursor();
    });

    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = 0;
        cursorOutline.style.opacity = 0;
        cursorVisible = false;
    });

    document.addEventListener('mousedown', () => {
        cursorScale = 0.8;
        updateCursor();
    });

    document.addEventListener('mouseup', () => {
        cursorScale = 1;
        updateCursor();
    });

    // Update cursor position on scroll
    scroll.on('scroll', (instance) => {
        if (cursorVisible) {
            updateCursor();
        }
    });

    // Update Locomotive Scroll on window resize
    window.addEventListener('resize', () => {
        scroll.update();
    });
});