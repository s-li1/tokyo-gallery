const left = document.querySelector('.left');
const right = document.querySelector('.right-side');
const container = document.querySelector('.container');
const tokyoName = document.querySelector('.tokyo-name');
const rightSlide = document.querySelector('.split.right')
const downButton = document.getElementById('next');
const upButton = document.getElementById('prev');
const slidesLength = rightSlide.querySelectorAll('.image').length;
const height = container.clientHeight;
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

let slideIndex = 0;
let currentActiveCircle = 1;

downButton.addEventListener('click', ()=> changeSlide('down'));
upButton.addEventListener('click', ()=> changeSlide('up'));

const changeSlide = (direction) => {
    const sliderHeight = rightSlide.clientHeight;
    
    if (direction === 'down') {
        slideIndex++;
        currentActiveCircle++;
        if(slideIndex > slidesLength - 1 && currentActiveCircle > circles.length) {
            slideIndex = 0;
            currentActiveCircle = 1;
            
        }
    } else if (direction === 'up') {
        slideIndex--;
        currentActiveCircle--;
        if(slideIndex < 0 && currentActiveCircle < 1) {
            slideIndex = slidesLength - 1;
            currentActiveCircle = circles.length - 1;
            
        }
    }
    updateCircle();
    rightSlide.style.transform = `translateY(-${slideIndex * sliderHeight}px)`;
}

function updateCircle() {
    circles.forEach( (circle, index) => {
        if ( index < currentActiveCircle) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActiveCircle === 1) {
        upButton.disabled = true;
    } else {
        upButton.disabled = false;
    }
    
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


