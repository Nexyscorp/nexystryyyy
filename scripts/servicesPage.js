document.addEventListener('DOMContentLoaded', function() {
  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }

  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  window.addEventListener("mousemove", function(e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left =`${posX}px`;
      cursorOutline.style.top = `${posY}px`;
      cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
      }, {duration: 300, fill: "forwards"});
  });

  $(document).ready(function(){
      var slickPrimary = {
          autoplay: true,
          autoplaySpeed: 2400,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1800,
          cssEase: 'cubic-bezier(.84, 0, .08, .99)',
          asNavFor: '.text-slider',
          centerMode: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next')
      }

      var slickSecondary = {
          autoplay: true,
          autoplaySpeed: 2400,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1800,
          cssEase: 'cubic-bezier(.84, 0, .08, .99)',
          asNavFor: '.image-slider',
          prevArrow: $('.prev'),
          nextArrow: $('.next')
      }

      $('.image-slider').slick(slickPrimary);
      $('.text-slider').slick(slickSecondary);
  });
});