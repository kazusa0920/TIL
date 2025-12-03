const message = document.getElementById('message')
const changeBtn = document.getElementById('changeBtn')

changeBtn.addEventListener('click', () => {
    message.textContent = 'こんにちは！DOM操作できたよ！'
})



const todoInput = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')

const inputText = todoInput.value

addBtn.addEventListener('click', () => {
    const newTodoItem = document.createElement('li')
    newTodoItem.classList.add('.list-item')
    newTodoItem.textContent = `${inputText}`
    todoList.appendChild(newTodoItem)
})


//リストはulの中に追加されるけど、テキストが空になっちゃう…。
//valueの取得の仕方が悪いのかな。