/*やること
１，チェックボックスの状態を把握する
２，チェックが入っていたら、ボタンを有効にする
３，チェックが外れていたら、ボタンを無効にする*/

/*解答前メモ
todoアプリのときにcheckedとか使った気がする。
buttonタグのdesabledをtrue,falseにしてオンオフ？？*/

const checkbox = document.getElementById('agree')
const button = document.getElementById('submitBtn')

checkbox.addEventListener('change', () => {
    button.disabled = !checkbox.checked
})
