const galBox = document.querySelectorAll('.port-box')
const gallery1 = document.querySelector('.portfolio1')
const gallery2 = document.querySelector('.portfolio2')

const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')



btnNext.addEventListener('click', () => {

    gallery1.classList.add('hidden')
    gallery2.classList.remove('hidden')

})
btnPrev.addEventListener('click', () => {

    gallery2.classList.add('hidden')
    gallery1.classList.remove('hidden')

})
for (let i = 0; i < galBox.length; i++) {
}