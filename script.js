function draw() {
  ball.style.top = ball.offsetTop - speed
  speed *= accelleration
}

window.width = window.innerWidth
window.height = window.innerHeight

let ball = document.createElement('div')
ball.setAttribute('id', 'baller')
ball.style.position = 'relative'
ball.style.width = 10
ball.style.height = 30
speed = 7.5
accelleration = 0.981

ball.style.backgroundColor = 'orange'

document.body.appendChild(ball)

let ballDims = ball.getBoundingClientRect()

function update(timestamp) {
  draw()

  requestAnimationFrame(update)

  if (ball.offsetTop >= window.height - 90) {
    speed *= 1.2
  }
}

update()
