const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')
const over = document.querySelector('.over')
const start = document.querySelector('.start')
const jogo = document.querySelector('.jogo')

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const startFunc = () => {
  start.style.display = 'none'
  jogo.style.display = 'block'
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  // console.log(marioPosition)

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './imagens/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    cloud.style.display = 'none'
    over.style.display = 'block'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)
