// Hero title animation
anime({
    targets: '.hero-title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
  });
  
  anime({
    targets: '.hero-subtitle',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: 300,
    duration: 1200,
    easing: 'easeOutExpo'
  });
  
  anime({
    targets: '.btn',
    scale: [0.8, 1],
    opacity: [0, 1],
    delay: 600,
    duration: 800,
    easing: 'easeOutExpo'
  });
  
  document.getElementById("languageSelect").addEventListener("change", function () {
    alert("Language changed to: " + this.value);
  });
  //header
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  //round header
  const menuBtn = document.getElementById('menuBtn');
      const closeBtn = document.getElementById('closeBtn');
      const mobileNav = document.getElementById('mobileNav');
  
      menuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
      });
  
      closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
  
      // Auto-close when clicking a link
      document.querySelectorAll('#mobileNav a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
        });
      });
     // Testimonial
     const video = document.getElementById('mainVideo');
const speed = document.getElementById('speedSelect');
const playBtn = document.getElementById('playBtn');

speed.addEventListener('change', () => {
  video.playbackRate = parseFloat(speed.value);
});

playBtn.addEventListener('click', () => {
  video.play();
});

//blog
// Animate cards on scroll into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });
  
  // Observe each card
  document.querySelectorAll('.animate').forEach(card => {
    observer.observe(card);
  });
      //review
      const wrapper = document.getElementById("testimonialWrapper");

      let scrollAmount = 1;
      let scrollDirection = 1;
      
      function autoScroll() {
        if (
          wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth ||
          wrapper.scrollLeft <= 0
        ) {
          scrollDirection *= -1; // Reverse direction
        }
        wrapper.scrollLeft += scrollAmount * scrollDirection;
      }
      
      let interval = setInterval(autoScroll, 10);
      
//team
