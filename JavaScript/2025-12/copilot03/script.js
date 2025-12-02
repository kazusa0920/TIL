/*やること
１，必要な要素を取得する
２，ｐタグの中の文章を書き変える
３，ボタンをクリックした時、２を実行する
*/


const inputName = document.getElementById('nameInput')
const button = document.getElementById('greetBtn')
const greeting = document.getElementById('greeting')

button.addEventListener('click', () => {
    const name = inputName.value
    // console.log(name)
    greeting.textContent = `こんにちは、${name}さん！`
})

//ｐタグ内の文章を書き換える
