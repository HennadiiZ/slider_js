
const slides = document.querySelectorAll('.offer__slide');
const prev = document.querySelector('.offer__slider-prev');  
const next = document.querySelector('.offer__slider-next');  
const currentSpan = document.querySelector('#current'); 
const totalSpan = document.querySelector('#total');

let index = 1;
totalSpan.innerHTML = totalSpanFunc(slides.length)
function totalSpanFunc(n){
    return (n < 10) ? '0' + n : n;
};
showSlides(index);
function showSlides(n){

    (n > slides.length) && (index = 1);
    (n < 1) && (index = slides.length);

    slides.forEach(item=>{
        item.style.display = 'none';
    });
    slides[index - 1].style.display = '';

    currentSpan.innerHTML = currentSpanFunc(index);
    
function currentSpanFunc(n){
    return (n < 10) ? '0' + n : n;
};

};
prev.addEventListener('click',()=>{
    showSlides(--index);
});
next.addEventListener('click',()=>{
    showSlides(++index);
});


