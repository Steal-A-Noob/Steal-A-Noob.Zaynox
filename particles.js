/* Initialisation de Particles.js */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Nombre de particules
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff4500" // Couleur des particules (orange/rouge 🔥)
    },
    "shape": {
      "type": "circle", // Cercle, triangle, edge, polygon
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff6347",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Les particules s'éloignent de la souris
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Clique pour ajouter des particules
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
