const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

const stars = [];

function Star() {
  this.x = Math.random() * width;
  this.y = Math.random() * height;
  this.z = Math.random() * width;

  this.move = function() {
    this.z -= 1;
    if (this.z <= 0) {
      this.z = width;
    }
  }

  this.show = function() {
    let x, y, s;
    x = (this.x - width / 2) * (width / this.z);
    x = x + width / 2;

    y = (this.y - height / 2) * (width / this.z);
    y = y + height / 2;

    s = width / this.z;

    ctx.beginPath();
    ctx.fillStyle = '#f6d42a';
    ctx.arc(x, y, s, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < 500; i++) {
  stars[i] = new Star();
}

function draw() {
  ctx.fillStyle = '#181825';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].show();
  }

  requestAnimationFrame(draw);
}

draw();