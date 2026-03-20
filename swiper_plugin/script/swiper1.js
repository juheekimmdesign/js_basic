// swiper1.js
const wrap = document.querySelector('#wrap');
const web =document.querySelector('.web');
const graphic = document.querySelector('.graphic');

const warpSwiper = new Swiper(wrap,{
    // 옵션:값, 옵션:{옵션:값, 옵션:값,},
    mousewheel:true,
    speed:1000,
    direction:'horizontal',
});
const webSwiper = new Swiper(web,{
    // effect : 'fade',
    // autoplay:{delay:000,},
    direction:'vertical',
    loop: true,
    pagination:{
    // 페이지대상HTML연결, 모양, 동적옵션
        el:'.web + .web_page',// 부모 선택자 1~2개는 작성해서 구분해주기
        type:'fraction',//bullets(기본값), fraction
        //dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
})
const graphicSwiper = new Swiper(graphic,{
    loop:true,
    pagination:{
        el: '.project2 .group .graphic_page',
        type:'bullets',
    },
})

console.log(wrap, web, graphic);