const choices = document.querySelectorAll('.choice')
const checkBtn = document.getElementById('checkBtn')
const result = document.getElementById('result')

let selected = null

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        choices.forEach(c => c.classList.remove('selected'))

        choice.classList.add('selected')

        selected = choice
    })
})

checkBtn.addEventListener('click', () => {
    if (!selected) {
        result.textContent = '選択肢を選んでください'
        return
    }

    if (selected.textContent === '沖縄県') {
        result.textContent = '正解'
    } else {
        result.textContent = '不正解'
    }
})