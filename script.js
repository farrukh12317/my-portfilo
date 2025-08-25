// function toggleNav() {
//   const nav = document.getElementById("nav-links");
//   nav.classList.toggle("active");
// }

// const transitionEl = document.querySelector('.transition');

// barba.init({
//   transitions: [
//     {
//       name: 'default-transition',
//       leave(data) {
//         return new Promise((resolve) => {
//           transitionEl.classList.add('is-active');
//           setTimeout(() => {
//             resolve();
//           }, 600); // match CSS timing
//         });
//       },
//       enter(data) {
//         transitionEl.classList.remove('is-active');
//       }
//     }
//   ]
// });

// const lenis = new Lenis();
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// Initialize Shery.js hover effect
Shery.mouseFollower();
Shery.makeMagnet(".shery-link");
// Mouse Follower

// const follower = document.getElementById("mouse-follower");

// window.addEventListener("mousemove", (e) => {
//   follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// Shery.js basic setup (optional for smooth effects)
Shery.makeMagnet(".btn", {
  scale: 1.2,
  ease: "cubic-bezier(0.23, 1, 0.32, 1)",
  duration: 0.3,
});

Shery.imageEffect(".back", {
  style: 5, //Select Style
  debug: true, // Debug Panel

 
});



function splitText(element) {
  const text = element.textContent;
  element.textContent = '';
  const chars = text.split('');
  chars.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    element.appendChild(span);
  });
}

// Target elements
const heading = document.querySelector('.hero-content h1');
const paragraph = document.querySelector('.hero-content p');

// Split both
splitText(heading);
splitText(paragraph);

// Animate with GSAP
gsap.to('.hero-content h1 span', {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  duration: 0.6,
  ease: 'back.out(1.7)',
  delay: 0.2
});

gsap.to('.hero-content p span', {
  y: 0,
  opacity: 1,
  stagger: 0.02,
  duration: 0.4,
  ease: 'power2.out',
  delay: 1
});


  gsap.from(".bento-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });