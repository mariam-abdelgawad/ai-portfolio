/* =========================================================
   MARIAM PORTFOLIO — script.js
   Beginner-friendly, split into small, commented functions.
   ========================================================= */


/* ---------------------------------------------------------
   1. MOBILE NAVIGATION TOGGLE

   The hamburger button shows/hides the nav links on small
   screens by toggling an "open" class defined in style.css.
   --------------------------------------------------------- */

function setupMobileNav() {

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {

    const isOpen = links.classList.toggle('open');

    toggle.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );

  });


  // Close the menu automatically when a link is clicked

  links.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      links.classList.remove('open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}


/* ---------------------------------------------------------
   2. HERO NETWORK ANIMATION

   A quiet canvas animation of moving dots (nodes) that draw
   a line between each other when they're close together —
   a simple nod to neural networks / graphs.
   --------------------------------------------------------- */

function setupHeroCanvas() {

  const canvas = document.getElementById('hero-canvas');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;


  let width;
  let height;
  let nodes;


  const NODE_COUNT = 46;
  const LINK_DISTANCE = 130;


  function resize() {

    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;

  }


  function makeNodes() {

    nodes = Array.from(
      { length: NODE_COUNT },
      () => ({

        x: Math.random() * width,

        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.3,

        vy: (Math.random() - 0.5) * 0.3

      })
    );

  }


  function step() {

    ctx.clearRect(
      0,
      0,
      width,
      height
    );


    // Move each node gently, bouncing off the edges

    nodes.forEach((n) => {

      n.x += n.vx;
      n.y += n.vy;


      if (
        n.x < 0 ||
        n.x > width
      ) {

        n.vx *= -1;

      }


      if (
        n.y < 0 ||
        n.y > height
      ) {

        n.vy *= -1;

      }

    });


    // Draw connecting lines between nearby nodes

    for (
      let i = 0;
      i < nodes.length;
      i++
    ) {

      for (
        let j = i + 1;
        j < nodes.length;
        j++
      ) {

        const dx =
          nodes[i].x -
          nodes[j].x;


        const dy =
          nodes[i].y -
          nodes[j].y;


        const dist = Math.sqrt(
          dx * dx +
          dy * dy
        );


        if (
          dist < LINK_DISTANCE
        ) {

          ctx.strokeStyle =
            `rgba(46, 196, 182, ${
              1 - dist / LINK_DISTANCE
            })`;


          ctx.lineWidth = 1;


          ctx.beginPath();

          ctx.moveTo(
            nodes[i].x,
            nodes[i].y
          );


          ctx.lineTo(
            nodes[j].x,
            nodes[j].y
          );


          ctx.stroke();

        }

      }

    }


    // Draw the nodes themselves

    nodes.forEach((n) => {

      ctx.fillStyle =
        'rgba(247, 249, 251, 0.7)';


      ctx.beginPath();


      ctx.arc(
        n.x,
        n.y,
        2,
        0,
        Math.PI * 2
      );


      ctx.fill();

    });


    if (!prefersReducedMotion) {

      requestAnimationFrame(step);

    }

  }


  resize();

  makeNodes();

  step();


  window.addEventListener(
    'resize',
    () => {

      resize();

      makeNodes();

    }
  );

}


/* ---------------------------------------------------------
   3. CONTACT FORM

   The contact form is connected directly to Formspree
   through the HTML form action.

   IMPORTANT:
   We do NOT use event.preventDefault() here because
   Formspree needs the browser to actually submit the form.

   The form is handled by:

   https://formspree.io/f/mppadkgd

   After submission, Formspree displays its success page.
   --------------------------------------------------------- */

function setupContactForm() {

  const form =
    document.querySelector('.contact-form');


  if (!form) return;


  // No submit event handler is needed here.

  // The browser will submit the form normally
  // to the Formspree endpoint defined in contact.html.

}


/* ---------------------------------------------------------
   4. INIT

   Run everything once the page has loaded.
   --------------------------------------------------------- */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    setupMobileNav();

    setupHeroCanvas();

    setupContactForm();

  }
);
