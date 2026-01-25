const message = document.getElementById('message')
const changeBtn = document.getElementById('changeBtn')

changeBtn.addEventListener('click', () => {
    if (message.textContent === 'こんにちは！') {
        message.textContent = 'んちゃ！'
    } else {
        message.textContent = 'こんにちは！'
    }
})