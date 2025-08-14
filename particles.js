/* particles.js - fond animé pour NoobFinder 🔥 */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, // nombre de particules
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // couleur des particules (blanc)
    },
    "shape": {
      "type": "circle", // forme des particules
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.7, // transparence
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 4, // taille des particules
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false // pas de lignes entre particules
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
        "mode": "grab" // effet quand on survole
      },
      "onclick": {
        "enable": true,
        "mode": "push" // ajoute des particules au clic
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 120,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
