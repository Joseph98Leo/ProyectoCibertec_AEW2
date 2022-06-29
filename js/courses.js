const boxes = document.querySelectorAll('.coursesHidden>div'),
      animations = document.querySelectorAll('div>lottie-player');
    
console.log(animations)

boxes.forEach(( li, i ) => {
    li.addEventListener('mouseenter', () => {
        animations[i].classList.add('intro')
    })
    li.addEventListener('mouseleave', () => {
        animations[i].classList.remove('intro');
    })
})
