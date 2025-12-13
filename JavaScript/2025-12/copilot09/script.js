const likeBtn = document.querySelector('.like-btn')
const likeCount = document.querySelector('.like-count')

//like-countの中の数字（str型）を数字（int型）として取得したい。



//どうやらparseInt関数というものを使うらしい。
//使い方はparseInt(取得したIDやclass.中の要素（textContentとか）)

//ちなみに「Parse」は『解析する』という意味(Google)。

likeBtn.addEventListener('click', () => {
    const liked = likeBtn.classList.toggle('liked')
    let count = parseInt(likeCount.textContent)

    if (liked) {
        count += 1
        likeBtn.textContent = '💗 いいね'
    } else {
        count -= 1
        likeBtn.textContent = '♡ いいね'
    }

    likeCount.textContent = count
})