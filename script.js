const btnstart = document.querySelector('button.start')
const btnreset = document.querySelector('button.reset')
const text = document.querySelector('div.text')
const ball = document.querySelector('div.ball img')
const boxes = [...document.querySelectorAll('div.box')]
const board = [1, 2, 3]
const divwin = document.querySelector('div.win')
const divlose = document.querySelector('div.lose')
const cup1 = document.querySelector('div.kubek1')
const cup2 = document.querySelector('div.kubek2')
const cup3 = document.querySelector('div.kubek3')
let win = 0
let lose = 0
let GameIsActive = false
let btnStartActive = true
let btnResetActive = false
let cupActive = false


function pick() {
    if (cupActive) {
        cup1.classList.add('up')
        cup2.classList.add('up')
        cup3.classList.add('up')
        const now = this.dataset.now
        const drawNumber = Math.floor(Math.random() * 3)
        const boardIndex = board[drawNumber]
        console.log(now)
        console.log(boardIndex)
        if (boardIndex === 1) {
            ball.style.left = '15%'
        } else if (boardIndex === 2) {
            ball.style.left = '48%'
        } else {
            ball.style.left = "80%"
        }
        if (now == boardIndex) {
            console.log('WYGRAŁEŚ')
            text.textContent = 'WYGRAŁEŚ'
            text.style.color = 'blue'
            divwin.textContent = 'Wygrałeś:' + ++win
            cupActive = !cupActive
            btnStartActive = false
            btnResetActive = !btnResetActive
        } else {
            console.log('PRZEGRAŁEŚ')
            text.textContent = 'PRZEGRAŁEŚ'
            text.style.color = 'red'
            divlose.textContent = 'Przegrałeś:' + ++lose
            cupActive = !cupActive
            btnStartActive = false
            btnResetActive = !btnResetActive
        }
    }
}

function buttonStart() {
    if (btnStartActive = btnStartActive) {
        text.textContent = ''
        ball.style.left = '48%'
        cup1.classList.remove('up')
        cup2.classList.remove('up')
        cup3.classList.remove('up')
        cup1.classList.toggle('down')
        cup1.classList.toggle('action1')
        cup2.classList.toggle('down')
        cup3.classList.toggle('down')
        cup3.classList.toggle('action3')
        cupActive = true
        btnResetActive = false
        btnStartActive = false
    }
}

function buttonReset() {
    if (btnResetActive) {
        text.textContent = ''
        ball.style.left = '48%'
        cup1.classList.remove('up')
        cup2.classList.remove('up')
        cup3.classList.remove('up')
        cup1.classList.toggle('down')
        cup1.classList.toggle('action1')
        cup2.classList.toggle('down')
        cup3.classList.toggle('down')
        cup3.classList.toggle('action3')
        btnStartActive = true
        btnResetActive = !btnResetActive
    }
}

btnstart.addEventListener('click', function () {
    btnstart.addEventListener('click', buttonStart)
    boxes.forEach(box => box.addEventListener('click', pick))
    btnreset.addEventListener('click', buttonReset)
})