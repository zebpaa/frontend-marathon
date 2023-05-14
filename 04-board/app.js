const board = document.querySelector('#board')
const colors = ['#7FFFD4', '#32CD32', '#FF1493', '#FFD700', '#800000', '#C0C0C0', '#483D8B', 'blue']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}