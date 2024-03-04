const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1.25, 
    centeredSlides: true,
    spaceBetween: 16,
    breakpoints: {
        768: {  
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 15,
            initialSlide: 1,
        },
    },
    speed: 600 
});