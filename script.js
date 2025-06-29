let randNumber = Math.floor(Math.random() * 10) + 1

const startGame = document.getElementById('startGameBtn')
const gameVisible = document.getElementById('gameVisiblity')
const gameLabel = document.getElementById('gameLabel')
const checkBtn = document.getElementById('checkBtn')
const restartBtn = document.getElementById('restartBtn')
const gameInstruction = document.getElementById('gameInstruction')
const inputElement = document.getElementById('userValue')
const result = document.getElementById('result')

function start() {
	startGame.style.display = 'none'
	gameInstruction.style.display = 'block'
	inputElement.style.display = 'block'
	checkBtn.style.display = 'inline-block'
	restartBtn.style.display = 'none'
	inputElement.value = ''
	result.textContent = ''
	gameLabel.textContent = 'Ваш ответ:'
}

function checkNumber() {
	const userInput = Number(inputElement.value)
	gameLabel.textContent = `Ваш ответ: ${inputElement.value}`

	if (isNaN(userInput)) {
		result.textContent = 'Это не цифра!'
		restartBtn.style.display = 'block'
	} else if (userInput > randNumber) {
		result.textContent = 'Слишком много! Попробуй ещё.'
	} else if (userInput < randNumber) {
		result.textContent = 'Слишком мало! Попробуй ещё.'
	} else {
		result.textContent = 'Поздравляю, вы угадали цифру! 🎉'
		restartBtn.style.display = 'block'
		checkBtn.setAttribute('disabled', '')
	}
}

function restartGame() {
	randNumber = Math.floor(Math.random() * 10) + 1
	inputElement.value = ''
	result.textContent = ''
	gameLabel.textContent = 'Ваш ответ:'
	checkBtn.removeAttribute('disabled')
	restartBtn.style.display = 'none'
}

inputElement.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		checkNumber()
	}
})

// Навешиваем события на кнопки
startGame.addEventListener('click', start)
checkBtn.addEventListener('click', checkNumber)
restartBtn.addEventListener('click', restartGame)
