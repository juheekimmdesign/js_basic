// function.js
// function 함수명(전달인자){반복실행내용;}

// 반복 함수 준비
function story1(){ // 사용자정의함수
    story2(); // 콜백함수
    let a = '조약돌 수집'; /* 지역변수 */
    a += '조약돌 떨어뜨리기'; // 기존이야기에 더하기 +=
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}
function story2(){ // 사용자정의함수
    let b = '부모는 먹을 것이 없어'/* 지역변수 */
    b += '계모가 아이들을 숲에 버리자고 제안한다'
    console.log(b);
}

// 반복 함수 실행(함수 밖에서 함수명을 작성해서 실행은 따로 해야함)
story2();

// 카페 키오스크 함수
function kiosk(){
    let cafe = '주문하기';/* 지역변수 */
    cafe += '장바구니에 커피 담기';
    cafe += '결제하기';
    cafe += '결제 방식 선택창 실행';
    cafe += '결제완료';
    cafe += '영수증 출력 메세지';
    cafe += '주문완료';
    console.log(cafe);
}
kiosk();//함수 선언 밖 함수 실행

// 260312
// --------------사용자정의함수 기초연습
// --------------지역(블록)/전역 스코프 개념 포함
// 스코프란? 변수가 접근 가능한 영역 위치

let num2 = 20; // 블록스코프 밖(전역스코프) 전역변수 생성, 변수는 함수 위에 적어야함.
fun1(); // 함수 호출 : 함수준비가 되어있으면 위, 아래에서 모두 실행 가능 
// console.log(`num1+num2=${num1+num2}`)
//num1은 지역변수이므로 전역변수 위치에서 사용불가(오류)

//함수 준비
function fun1(){//블록스코프 시작
    let num1 = 10;//let 지역변수
    console.log(`num1 : ${num1}`)//지역변수 출력
    console.log(`num1+num2=${num1+num2}`);//지역+전역 동시 출력
    // (위) 콘솔 주의사항 : num2 전역변수의 생성위치가 함수호출보다 위에 있어야함.
}//블록 스코프 종료

// ---------------지역&전역 연습문제
// 1.변수
let x = 1; // 전역변수, 전역 위치에서 값 대입
let y; // 전역변수, 값 X undefined
let z; // 전역변수, 값 X undefined
console.log(x, y, z); //1 undefined undefined(지역의 값을 인식X)
// 2.함수호출
func_z(); //1+undefined -> NaN == Not a Number 약자(숫자가 아니라 계산할 수없음)
// 3.함수준비
function func_z(){
    z = 5; // 전역변수z 값 5대입 위치 = 지역 스코프(전역에서 인식못함)
    func_y(); // 지역변수 y10 값 인식을 위해 y10을 가지고 있는 함수 호출
    console.log(x+y); //11
}
function func_y(){
    y = 10; // 전역변수y 값 10대입 위치 = 지역 스코프(전역에서 인식못함)
    console.log(x+y+z); //16
}

// -------------------- 지역&전역 스코프 연습문제2.
// 부르는 순서 중요!
// 최종목표) A방간식 : 초코파이, B방간식 :초코파이
// 변수
let snack;
// 함수호출
console.log(snack); // undefined (roomA 호출 전 : 대입값X)
roomA(); // 지역스코프 안 전역변수 대입값 발생 '초코파이'
console.log(snack); // 초코파이
roomB();
console.log(snack); // 초코파이
// 함수준비
function roomA(){
    snack = '초코파이' // 전역변수에 문자열 대입 : 지역 안에서 대입됐지만, 변수 자체가 전역이기 때문에 값이 대입됨.
    console.log(`A방에서 먹는 간식 : ${snack}`); // 전역변수 호출(roomA를 호출해야 가능한 전역변수)
}
function roomB(){//함수 블록 스코프 안
    let drink = '우유'
    console.log(`B방에서 먹는 간식 : ${snack}, ${drink}`); // 전역변수 호출(roomB를 호출해야 가능한 전역변수)
}
// ----------------------전역&지역변수 문제3.
// 지갑에 든 물건 예측하기
// 지갑 - 동전, 지갑 - 지폐
// 변수의 이름이 같아도 그 변수가 전역/지역으로 나눠져 있다면 동일설정이 가능하다.
// 변수
let wallet = '동전'; //전역변수

// 함수호출
bank();//결과는? 지역변수 값 -> wallet : 지폐
console.log(`wallet : ${wallet}`); //결과는? 전역변수 값 -> wallet : 동전

//함수 준비
function bank(){
    // let wallet = '지폐'; //지역변수 -> 이름이 같지만 함수 안에서만 사용하려고 새로 만든 변수!
    console.log(`wallet : ${wallet}`)
}

// ---------------------------------함수 내 전달인자(매개변수)
// 함수가 반복될때마다 데이터를 바꾸고 싶을 때 매개변수가 필요하다.
// 매개변수 : 함수를 호출할때마다 **데이터를 받는** 변수를 함수 내에서 생성
// 오늘의 급식 메뉴(학생이 요청하면 급식 메뉴 호출)


// 함수호출
school('부대찌개'); //학생1 요청 -> 호출
school('파스타'); //학생2 요청 -> 호출
school(); //학생3 요청 -> 기본값 호출 : 기본값을 필요하면 작성

// 함수준비
function school(meals='김밥'){ //매개변수는 let, const 없이도 알아서 변수인식함.
    // let meals ='부대찌개';
    console.log(`오늘의 급식 메뉴 : ${meals}`)
}

// ----------------------------------매개변수 활용 함수 응용2.
// 헨젤과 그레텔의 집찾는 재료(매개변수 material) 찾아주기
// house('조약돌');
house(); //매개변수의 기본값이 있을 때 호출 괄호는 비워도 됨.
house('빵부스러기');

function house(material='조약돌'){//(material) -> 매개변수 생성
    let story = '';//지역변수
    //이야기
    story += `헨젤은 ${material}를(을) 떨어뜨리면서 숲으로 갔습니다.`//(material) -> 매개변수 대입
    story += `계모가 떠나고`
    story += `헨젤은 ${material}를(을) 따라서 집으로 돌아갔습니다.`
    console.log(story);
}

// ------------------------------- 커피주문 매개변수 함수
// 출력예시) 손님 요청에 따라 다른 메뉴와 잔 수가 출력
// 카페라떼 1잔 주문완료
// 아메리카노 2잔 주문완료

coffee('카페라떼') //num은 기본값 적용
coffee('아메리카노', 2)

function coffee(menu, num=1){//매개변수가 2개일 경우 ,를 붙임.
    console.log(`${menu} ${num}잔 주문완료`)
}

// -----------------------------------장바구니 함수+매개변수
// 한라봉 3kg 25,900원 1개
// 치아바타 샌드위치 11,880원 2개

//함수호출
cart('한라봉 3kg', 25900);
cart('치아바타 샌드위치', 11880, 2);

//함수준비
function cart(product, price, num='1'){
    let item = '';
    item += `상품명 : ${product}`;
    item += `가격 : ${price.toLocaleString('ko-kr')}원`;
    item += `수량 : ${num}개`;
    console.log(item);
}

// ----------------------------------------매개변수 활용 키오스크
// Q. 따뜻한 카페라떼 2잔 주문완료되었습니다.
// Q. 차가운 아메리카노 1잔 주문완료되었습니다.
// Q. 따뜻한 녹차라떼 2잔 주문완료되었습니다.
// Q. 차가운 아메리카노 1잔 주문완료되었습니다.
//카페메뉴배열
const menuAll = ['카페라떼', '아메리카노', '녹차라떼'];
const hotIce = ['따뜻한', '차가운']
console.log(menuAll[1]);

//함수호출
cafeKiosk(0, 0, 2);
cafeKiosk(1,1);
cafeKiosk(0, 2, 2);
cafeKiosk(1, 1);

// 기본값이 맨 앞에 있을 때 undefined를 붙여준다
function cafeKiosk(temperature, menu, num=1){
    console.log(`${hotIce[temperature]} ${menuAll[menu]} ${num}잔 주문완료되었습니다.`);
}