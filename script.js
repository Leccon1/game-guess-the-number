const startGame = document.getElementById('startGameBtn')
const gameVisible = document.getElementById('gameVisiblity')
const gameLabel = document.getElementById('gameLabel')
const checkBtn = document.getElementById('checkBtn')
const restartBtn = document.getElementById('restartBtn')
const randNumber = Math.floor(Math.random() * 10) + 1

function checkNumber() {
	const inputElement = document.getElementById('userValue')
	const userInput = inputElement.value
	gameLabel.textContent = `Ваш ответ: ${userInput}`
	const result = document.getElementById('result')

	if (userInput > randNumber) {
		result.textContent = 'Слишком много! Попробуй ещё.'
	} else if (userInput < randNumber) {
		result.textContent = 'Слишком мало! Попробуй ещё.'
	} else if (userInput == typeof !randNumber) {
		result.textContent = 'Это не цифра!'
		restartBtn.style.display = 'block'
	} else {
		result.textContent =
			'Поздравляю, вы угадали цифру! чтобы начать заново, перезагрузите страницу, я еще не понял как сделать кнопку restart ('
		restartBtn.style.display = 'block'
		checkBtn.setAttribute('disabled', '')
	}
}

document
	.getElementById('userValue')
	.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			checkNumber()
		}
	})
