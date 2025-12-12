const mainImg = document.getElementById('mainImage');
const switchBtn = document.getElementById('switchBtn')

switchBtn.addEventListener('click', () => {
    if(mainImg.src.includes('img/cat-6060835_1280.jpg')){
        mainImg.src = 'img/cat-649164_1280.jpg';
    }else{
        mainImg.src = 'img/cat-6060835_1280.jpg';
    }
})