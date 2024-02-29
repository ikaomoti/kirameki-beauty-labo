const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1.25, //表示するスライド数
    centeredSlides: true,
    spaceBetween: 16,//スライド間の幅(px)
    breakpoints: {
        768: {  //768px以上のとき
            slidesPerView: 3,//表示するスライド数
            slidesPerGroup: 1,//一度にスライドする数
            spaceBetween: 15,//スライド間の幅(px)
        },
    },
    speed: 600 //スライドの推移時間を600msに
});