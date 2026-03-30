// if.js
let data1 = '';// 변수생성과 빈문자열 대입
// typeResult 변수생성
// Boolean내장함수 활용 data1 변수에 들어간 논리데이터종류확인
// typeResuly 대입
let typeResult = Boolean(data1);
console.log(`data1의 데이터타입은 : ${typeResult}`);//출력

data1 = 'ABC';//data1 문자'ABC' 재대입
typeResult = Boolean(data1); //변경된 data1을 내장함수로 재대입
console.log(`data1의 데이터타입은 : ${typeResult}`);//출력

data1 = -5;
typeResult = Boolean(data1);
console.log(`data1의 데이터타입은 : ${typeResult}`);//출력

let data2;//undefined
typeResult = Boolean(data2);
console.log(`data2의 데이터타입은 : ${typeResult}`);//출력

// false, null, NaN

data3 = false; //false 논리키워드 false=/= 'false' ->'false'로 적으면, 문자열로 인식해서 참으로 값이 나옴.
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`);//출력

data3 = null; //null 값을 없앨때 대입하는 키워드
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`);//출력

data2 = '가나다라'; 
data3 = data2 * 10; //(Not a Number)
console.log(data3);
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`);//출력

data2 = [0,1,2]; //3 배열
data3 = [];
// 빈 배열 new Array(); : 내장함수가 있다로 구분, 빈 문자열과 다르게 내장함수를 참으로 인식함.
// 빈 문자열은 거짓 ''
typeResult = Boolean(data2);
console.log(`data2의 데이터타입은 : ${typeResult}`);//출력
typeResult = Boolean(data3);
console.log(`data3의 데이터타입은 : ${typeResult}`);//출력

// 조건문
// if(조건식){조건식이 참일때 실행되는 실행문}
// if(조건식){조건식이 참일때}else{조건식이 거짓일때 실행}

let x = 10;
let y = 20;
let result = x != y; //=(대입) ==(피연산자가 같은가 비교연산) !=(다른가)
console.log(`result => ${result}`);
if(result) console.log('result는 참'); //실행이 한줄이면 중괄호 생략가능
// if(result) {console.log('result는 참');}

// 비교연산자
// 일치연산(기본/엄격) : ==, ===
// 부등연산(기본/엄격) : !=, !==
// 크다, 작다 : <, >
// 크거나 같다, 작거나 같다 : <=, >=

x = '5';
y = 5;
if( x==y ) console.log('x와 y는 같다');
x = Number(x);
if( x===y ) console.log('x와 y는 데이터타입까지 같다');

let w = 1920;
let h = 1080;
if( w!=h) console.log('w와 h는 다르다');
if( w>h ) console.log('w는 h보다 크다');
w -= h; // w = w-h;(빼기복합)
if( w<h ) console.log('w는 h보다 작다');
if( w<=h ) console.log('w는 h보다 작거나 같다')

// 인쇄하기 버튼 클릭시 확인/취소 묻는 창이 실행
// 확인 누르면 -> 인쇄창 실행
// 취소 누르면 -> 인쇄가 취소 되었습니다. 메세지 실행
const prtBtn = document.querySelector('#prt_btn');
console.log(prtBtn);

prtBtn.addEventListener('click', function(){
    let user = confirm('인쇄하시겠습니까?'); 
    console.log(user);
    // if(user==true) print();
    // if(user!=false) print();
    if(user) print();
})

// 성인 인증 버튼에 따른 조건 결과
const adBtn = document.querySelector('#ad_btn');
console.log(adBtn);

adBtn.addEventListener('click', function(){
    let user = confirm('당신은 성인이십니까?');
    console.log(user);
    if( user ) location.href = 'https://google.com';
    else alert('성인이 아니면 접속이 불가능합니다.');
    /*  if(user){
        location.href = '주소'
        console.log(''); //2줄 이상일 땐 중괄호 처리
    }else{
        alert('메세지');
    } */
})