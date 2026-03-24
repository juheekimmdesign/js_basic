// swiper3.js
const ssf = document.querySelector('.ssf_hero');
const brand =document.querySelector('.brand_slide');
console.log(ssf, brand);
const ssfSwiper = new Swiper(ssf, {
    loop:true,
    autoplay:{
        delay:1000,
        speed:1000,
    },
    slidesPerView:3,//한번보이는 슬라이드개수
    spaceBetween:0,
    // pagination:{el:'',}
    navigation:{
        prevEl:'.ssf_hero .prev',
        nextEl:'.ssf_hero .next',
    }
});
const brandSlide = new Swiper(brand, {
    slidesPerView:3,
    spaceBetween:10,
    navigation:{
        prevEl:'.right_wrap .prev',
        nextEl:'.right_wrap .next',
    },
});