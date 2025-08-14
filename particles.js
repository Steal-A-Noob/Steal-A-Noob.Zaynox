// particles.js

const particlesJS = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'particlesCanvas';
  document.getElementById('particles-js').appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for(let i=0; i<100; i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      radius: Math.random()*2 + 1,
      speedX: (Math.random()-0.5)*1,
      speedY: (Math.random()-0.5)*1
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
      ctx.fillStyle = 'white';
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;

      if(p.x < 0) p.x = canvas.width;
      if(p.x > canvas.width) p.x = 0;
      if(p.y < 0) p.y = canvas.height;
      if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }

  animate();
};

particlesJS();
