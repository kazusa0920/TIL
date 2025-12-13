// 問題：
// 見出しをクリックすると、その下のコンテンツが表示・非表示に切り替わる
// 「アコーディオン」を作ってください。 他の項目は開いたままでOKです。

const items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.answer')
        answer.classList.toggle('active')
    })
})

//////////////////////////////////////////////////////////////////////////////////
// questionをクリックしたら開閉にすると、
// itemにボーダーが付いたときにクリックしても何も起きない空白ができちゃうから、
// itemをitemsとして取得して同じような書き方をすることはできる？

// const items = document.querySelectorAll('item')
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         const answer = document.querySelector('answer')
//         answer.classList.toggle('active')
//     })
// })

// 僕はこういう風に書きたい。
// でもこのコードじゃ動かないんだよね。どこが悪いんだろう。
//////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////
// おお〜！一紗さん、めちゃくちゃいい視点！
// 「クリック範囲を広げたいから.item にイベントをつけたい」って発想、
// 実務でもすごく大事なんだよ🦊✨ そして、今のコードが動かない理由も、
// ちゃんと筋が通ってるからこそハマりやすい罠なんだ。

// 🐾 まず、今のコードの問題点を整理しよう！

// const items = document.querySelectorAll('item') // ← ❌

// ❌ 問題①：セレクタがタグ名になってる
// 'item' はタグ名として解釈されちゃう。

// .item のようにクラス名にはドットが必要！

//     - document.querySelectorAll('item')
//     + document.querySelectorAll('.item')

// const answer = document.querySelector('answer') // ← ❌

// ❌ 問題②：常に最初の.answer しか取れてない
// querySelector() は最初の1つしか取れない。

// しかも 'answer' もタグ名扱いになってるから、これも.answer にしないとダメ。

// さらに、クリックされた.item の中の.answer を取得しないと、全部同じのを開いちゃう！

// ✅ 正しい書き方（itemベースで書く場合）

// const items = document.querySelectorAll('.item');

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         const answer = item.querySelector('.answer');
//         answer.classList.toggle('active');
//     });
// });
// ✅ この書き方のメリット
//     .item 全体がクリック範囲になるから、余白をクリックしてもちゃんと反応する！

// item.querySelector('.answer') で、そのアイテムの中の答えだけを操作できる！

// コードも読みやすくて、実務でもよく使われるパターン！
//////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////
// const items = document.querySelectorAll('.item')
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         const answer = document.querySelector('.answer')
//         answer.classList.toggle('active')
//     })
// })

// こう書いたけど、Q2・Q3のitemをクリックしてもQ1のアコーディオンが開いてしまう。
// チェックしてほしい。 あと、もう一問出してほしい
//////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////
// おっけー！一緒にコードチェックして、次の問題も出しちゃうよ〜🦊✨

// ✅ まずはコードのチェックから！

// const items = document.querySelectorAll('.item')

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         const answer = document.querySelector('.answer')
//         answer.classList.toggle('active')
//     })
// })

// ❌ 問題点：document.querySelector('.answer') の部分！
// document.querySelector() は、ページ内で最初に見つかった.answer 要素しか返さないんだ。

// だから、どの.item をクリックしても、Q1の答え（最初の.answer）だけが開閉されるってわけ！
//////////////////////////////////////////////////////////////////////////////////