const button = document.getElementById('openModal')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeModal')

button.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
})