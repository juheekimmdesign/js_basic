// scroll-1.js
const topA =document.querySelector('.popup .top');
const cateTitle = document.querySelectorAll('.category_title a');
const cateContent = document.querySelectorAll('.category_contents section')
console.log(topA, cateTitle, cateContent);

topA.addEventListener('click', function(e){
    e.preventDefault(); //href 막기
    //객체.함수();
    //window.scrollTo(x좌표, y좌표); //좌표에 문자X
    window.scrollTo(0,100);
})

//반품 안내 클릭 시 반품 위치 이동
/* cateTitle[3].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, cateContent[3].offsetTop-200);//산술연산자로 탭과 내용이 겹치지않는 위치까지 설정해주기.
    //scrollTo y좌표 수치값은 최상단(0) 또는 header의 높이 위치 정도일 때 숫자로 작성한다. 그 이상 큰 값은 다른 객체.속성을 활용해야한다.
    console.log(cateContent[3].offsetTop);//위치를 추적하는 속성
    activeFunc(cateTitle[3]);
})
cateTitle[2].addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,cateContent[2].offsetTop-200)//o
    console.log(cateContent[2].offsetTop);
    activeFunc(cateTitle[2]);
})
cateTitle[1].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,cateContent[1].offsetTop-200);
    console.log(cateContent[1].offsetTop);
    activeFunc(cateTitle[1]);
})
cateTitle[0].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,cateContent[0].offsetTop-200);
    console.log(cateContent[0].offsetTop);
    activeFunc(cateTitle[0]);//4.activeFunc을 부를 때 cateTitle[0]에 'active'를 씌우고 함수를 종료한다.
}) */

//for~of로 위 이벤트 4개 압축하기
for (let title of cateTitle){
    console.log(title);//Nodelist 출력이 아닌 개별 출력확인
    title.addEventListener('click', function(e){//e = 태그의 속성
        e.preventDefault();
        // console.log('클릭확인');
        activeFunc(title);
        // 클릭한 제목에 관련한 내용으로 스크롤 이동하기
        // window.scrollTo(0, cateContent[0].offsetTop-200);
        // 객체속성매개변수.currentTarget.dataset.데이터속성이름
        console.log(e.currentTarget.dataset.index);//a태그의속성.속성의대상이누구인지<재확인역할>.데이터.index의값을불러온다
        const i = e.currentTarget.dataset.index;//변수로 길이줄임
        window.scrollTo(0, cateContent[i].offsetTop-200);
    })
}



//active 적용/해제 함수
function activeFunc(target){//3. 매개변수의 이름을 붙여주고
    for(let i of cateTitle) i.classList.remove('active');// 1. 모든 cateTitle의 'active'를 지우겠다.
    return target.classList.add('active');//2. 함수 메개변수에의 클래스에 'active'를 붙이고 리턴을 만나서 함수를 종료한다 명령어.
}