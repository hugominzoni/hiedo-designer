const imageThumb = document.querySelectorAll('.open-port')
const imageBox = document.querySelector('.portf-box')
const closeBox = document.querySelector('.close-port')
const overlay = document.querySelector('.over')
const imgBig = document.querySelectorAll('.imgBig')

for(let i = 0; i < imgBig.length; i++){
    imgBig[i].addEventListener('click', function(){})
}






for(let i = 0; i < imageThumb.length;i++){
    imageThumb[i].addEventListener('click', function(){
        imgBig[i].classList.remove('hidden')
        imageBox.classList.remove('hidden')
        closeBox.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })


    closeBox.addEventListener('click', function(){
        imgBig[i].classList.add('hidden')
        imageBox.classList.add('hidden')
        overlay.classList.add('hidden')
        closeBox.classList.add('hidden')
    })

}