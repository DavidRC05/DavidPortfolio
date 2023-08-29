// Function to add the animation class when the element is fully in the viewport
function handleScrollAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      !entry.target.classList.contains("animate__slideInUp")
    ) {
      entry.target.classList.add(
        "animate__animated",
        "animate__slideInUp",
        "animate__faster"
      );
      observer.unobserve(entry.target); // Stop observing once the animation is applied
      entry.target.style.opacity = 1; // Make the text visible once the animation starts
    }
  });
}

// Create an Intersection Observer instance
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0, // Fully visible
};

const observer = new IntersectionObserver(handleScrollAnimation, options);

// Start observing the animated-text element
const animatedText = document.getElementById("animated-text");
if (animatedText) {
  observer.observe(animatedText);
}

// Function to apply animation when the element is in the viewport
function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Check if the element is the second row and add the appropriate animation class
      if (entry.target.classList.contains("second-row")) {
        entry.target.classList.add(
          "animate__animated",
          "animate__fadeInLeftBig"
        );
      } else {
        entry.target.classList.add(
          "animate__animated",
          "animate__fadeInRightBig"
        );
      }
      observer.unobserve(entry.target);
      entry.target.style.opacity = 1;
    }
  });
}

// Create an observer to watch for elements with the "skill-row" class
const skillRows = document.querySelectorAll(".skill-row");
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // Adjust this threshold value to control when the animation triggers
};

const observer1 = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe each skill row
skillRows.forEach((row) => {
  observer1.observe(row);
});

particlesJS("particles-js", {
  particles: {
    number: { value: 183, density: { enable: true, value_area: 800 } },
    color: { value: "#07141e" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#a71818" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0,
      random: false,
      anim: {
        enable: false,
        speed: 7.876701205054087,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00638c",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 6092.965831288987, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 150, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
