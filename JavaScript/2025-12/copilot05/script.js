const mainImg = document.getElementById('mainImage');
const switchBtn = document.getElementById('switchBtn')

switchBtn.addEventListener('click', () => {
    if (mainImg.src.includes('https://cataas.com/cat')){
        mainImg.src = 'https://api.thedogapi.com/v1/breeds';
    }else{
        mainImg.src = 'https://cataas.com/cat';
    }
})