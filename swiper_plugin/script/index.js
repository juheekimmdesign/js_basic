// index.js
const heroBnr = document.querySelector('.hero_bnr');
const maketBnr = document.querySelector('.market_bnr')

const heroSlide = new Swiper(heroBnr,{
    // 옵션:값,
    // 옵션:{옵션:값, 옵션:값,},
    loop:true,//슬라이드 끝 -> 시작 반복 true, false (값이 참, 거짓으로 나뉘는 옵션의 값)
    // direction:'horizontal', // 슬라이드 방향 : 수평(기본값)
    // direction:'vertical', // 슬라이드 방향 : 수평(기본값)
    // 제자리 나타나기/사라지기 할때는 direction 적용해제(같이 사용할 수없음!)
    effect:'fade', // fade, cube, flip
    // mousewheel:true, // 마우스휠 가능 옵션
    // 자동재생
    autoplay:{
        delay:1000, //1000 == 1초(자주쓰는 옵션)
        pauseOnMouseEnter:true, // 마우스가 올라오면 일시정지(필요할때 설정해야하는 옵션)
        disableOnInteraction:true, // 마우스 상호작용 후에 멈출건지, 움직일건지(false) 옵션 -> 기본옵션이 false
    },
});

const marketSlide = new Swiper(maketBnr,{
    loop: true,
    effect: 'fade',
    autoplay:{
        delay: 1000, pauseOnMouseEnter:true,
    }
});