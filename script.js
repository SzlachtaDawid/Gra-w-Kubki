const btnstart = document.querySelector('button.start')
const btnreset = document.querySelector('button.reset')
const text = document.querySelector('div.text')
const ball = document.querySelector('div.ball img')
const boxes = [...document.querySelectorAll('div.box')]
const board = [1, 2, 3]
const divwin = document.querySelector('div.win')
const divlose = document.querySelector('div.lose')
const kubek1 = document.querySelector('div.kubek1')
const kubek2 = document.querySelector('div.kubek2')
const kubek3 = document.querySelector('div.kubek3')
let win = 0
let lose = 0
let GameIsActive = false
let btnStartActive = true
let btnResetActive = true


function pick() {
    if (lock) {
        document.querySelector('div.kubek1').classList.add('up')
        document.querySelector('div.kubek2').classList.add('up')
        document.querySelector('div.kubek3').classList.add('up')
        const now = this.dataset.now
        const pc = Math.floor(Math.random() * 3)
        const pccc = board[pc]
        console.log(now)
        console.log(pccc)
        if (pccc === 1) {
            ball.style.left = '15%'
        } else if (pccc === 2) {
            ball.style.left = '48%'
        } else {
            ball.style.left = "80%"
        }
        if (now == pccc) {
            console.log('WYGRAŁEŚ')
            text.textContent = 'WYGRAŁEŚ'
            text.style.color = 'blue'
            divwin.textContent = 'Wygrałeś:' + ++win
            lock = !lock
            btnStartActive = false
            btnResetActive = !btnResetActive
        } else {
            console.log('PRZEGRAŁEŚ')
            text.textContent = 'PRZEGRAŁEŚ'
            text.style.color = 'red'
            divlose.textContent = 'Przegrałeś:' + ++lose
            lock = !lock
            btnStartActive = false
            btnResetActive = !btnResetActive
        }
    }
}

function buttonclick() {
    if (btnStartActive = btnStartActive) {
        text.textContent = ''
        ball.style.left = '48%'
        kubek1.classList.remove('up')
        kubek2.classList.remove('up')
        kubek3.classList.remove('up')
        kubek1.classList.toggle('down')
        kubek1.classList.toggle('action1')
        kubek2.classList.toggle('down')
        kubek3.classList.toggle('down')
        kubek3.classList.toggle('action3')
        lock = true
        btnResetActive = false
        btnStartActive = false
    }
}

function reset() {
    if (btnResetActive) {
        text.textContent = ''
        ball.style.left = '48%'
        kubek1.classList.remove('up')
        kubek2.classList.remove('up')
        kubek3.classList.remove('up')
        kubek1.classList.toggle('down')
        kubek1.classList.toggle('action1')
        kubek2.classList.toggle('down')
        kubek3.classList.toggle('down')
        kubek3.classList.toggle('action3')
        btnStartActive = true
        btnResetActive = !btnResetActive
    }
}

btnstart.addEventListener('click', function () {
    btnstart.addEventListener('click', buttonclick)
    boxes.forEach(box => box.addEventListener('click', pick))
    btnreset.addEventListener('click', reset)
})