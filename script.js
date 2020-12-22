const left = document.querySelector('.left');
const right = document.querySelector('.right-side');
const container = document.querySelector('.container');
const tokyoName = document.querySelector('.tokyo-name');

const rightSlide = document.querySelector('.split.right');
const downButton = document.querySelector('.next');

const slidesLength = rightSlide.querySelectorAll('.image').length;

const height = container.clientHeight;

let slideIndex = 0;

const timeline = new TimelineMax();
const tl = new TimelineMax();

gsap.from('.bar',{duration: 1, x: 30, opacity: 0});
timeline.fromTo('.eng-name', {x: 360, y: 180}, { y: 0, duration: 1})
.fromTo('.eng-name',{y:0}, {y:0, x:0, duration: 1});
gsap.from('.details', {duration:1, y: -50, opacity: 0});
tl.fromTo(tokyoName, {x: 360, rotation: 0}, {duration: 1, rotation: -90}).fromTo(tokyoName, {x: 360}, {x: 145, duration: 1})
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

