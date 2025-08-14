const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(x, y, size, color, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedY = speedY;
  }
  update() { this.y -= this.speedY; if(this.y < 0)
