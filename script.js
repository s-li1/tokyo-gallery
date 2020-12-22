const left = document.querySelector('.left');
const right = document.querySelector('.right-side');
const container = document.querySelector('.container');
const tokyoName = document.querySelector('.tokyo-name');

const rightSlide = document.querySelector('.split.right')
const downButton = document.querySelector('.next');

const slidesLength = rightSlide.querySelectorAll('.image').length;

const height = container.clientHeight;

let slideIndex = 0;


downButton.addEventListener('click', ()=> changeSlide('up'));

const changeSlide = (direction) => {
    const sliderHeight = rightSlide.clientHeight;
    
    if (direction === 'up') {
        slideIndex++;
        if(slideIndex > slidesLength - 1) {
            slideIndex = 0;
        }
    }
    rightSlide.style.transform = `translateY(-${slideIndex * sliderHeight}px)`;
}

right.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-right')
    tokyoName.classList.add('fade-out');
    tokyoName.classList.remove('fade-in');
    left.classList.add('fade-out');
    setTimeout(()=>tokyoName.setAttribute("style", "opacity: 0;"), 1000);
    
});

right.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-right')
    tokyoName.classList.remove('fade-out');
    tokyoName.classList.add('fade-in');
    setTimeout(()=>tokyoName.setAttribute("style", "opacity: 1;"), 1000);

});

