document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Here you can add code to send the form data to a server
  });
  

  // Select cursor elements
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