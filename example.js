const QUESTION = 'What colour is the sky?'
const ANSWER = 'blue'

function init() {
    document.querySelector('#question').innerHTML = QUESTION
    const button = document.querySelector('button')
    button.addEventListener('click', checkAnswer)
}

function checkAnswer() {
    const input = document.querySelector('input')
    const userAnswer = input.value

    document.querySelector('#failure-feedback').style.display = 'none'
    document.querySelector('#success-feedback').style.display = 'none'

    if (userAnswer === ANSWER) {
        document.querySelector('#success-feedback').style.display = 'block'
    } else {
        document.querySelector('#failure-feedback').style.display = 'block'

    }
}