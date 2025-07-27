const canvas = document.getElementById('snow-canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function Snowflake(x, y, radius, speed, opacity, driftPhase, windFactor) {
  this.x = x
  this.y = y
  this.radius = radius
  this.speed = speed
  this.opacity = opacity
  this.driftPhase = driftPhase
  this.windFactor = windFactor
  this.angle = Math.random() * Math.PI * 2
}

Snowflake.prototype.draw = function () {
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
  ctx.fill()
}

Snowflake.prototype.update = function () {
  this.angle += 0.01 + this.windFactor * 0.002
  this.y += this.speed
  this.x += Math.sin(this.angle + this.driftPhase) * this.windFactor

  if (this.y > canvas.height) {
    this.y = -this.radius
    this.x = Math.random() * canvas.width
    this.angle = Math.random() * Math.PI * 2
  }

  if (this.x > canvas.width + this.radius) this.x = -this.radius
  if (this.x < -this.radius) this.x = canvas.width + this.radius

  this.draw()
}

let snowflakes = []

function createSnowflakes() {
  const screenWidth = window.innerWidth;
  let numberOfSnowflakes;

  if (screenWidth < 480) {
    numberOfSnowflakes = 60;
  } else if (screenWidth < 768) {
    numberOfSnowflakes = 100;
  } else if (screenWidth < 1200) {
    numberOfSnowflakes = 150;
  } else {
    numberOfSnowflakes = 200;
  }
  
  for (let i = 0; i < numberOfSnowflakes; i++) {
    let radius = Math.random() * 3 + 1.5
    let speed = Math.random() * 1 + 0.5
    let opacity = Math.random() * 0.5 + 0.3
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height
    let driftPhase = Math.random() * Math.PI * 2
    let windFactor = Math.random() * 1.5 + 0.5
    snowflakes.push(new Snowflake(x, y, radius, speed, opacity, driftPhase, windFactor))
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update()
  }
  requestAnimationFrame(animate)
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  snowflakes = []
  createSnowflakes()
})

createSnowflakes()
animate()
