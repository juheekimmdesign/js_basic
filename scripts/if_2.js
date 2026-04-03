// if_2.js
// 비교 연산자와 참, 거짓 데이터 + 논리연산자
// && (and) 모두 참이어야 참
//  || (or) 하나만 참이어도 참
// ! 데이터 참, 거짓 상태 반전

let data1 = 'web' && 'javascript';
let data2 = 0;
let data3;
console.log(data1, Boolean(data1));//javascript true

data1 = 0 && 'figma';// 왼쪽 첫번재 데이터가 거짓이므로 오른쪽 수행안하고 바로 결과를 냄
console.log(data1, Boolean(data1));//0 false

data1 =++data2 && '';
console.log(data1, Boolean(data1), data2);// false 1

data1 = 'html' || 'css';//'css'수행안함
console.log(data1, Boolean(data1));//html true

data1 = data3 || data2;//data3 거짓이므로 data2 처리함.
console.log(data1, Boolean(data1), data3);//1 true undefined

data1 = !true; //값을 반전
console.log(data1, Boolean(data1));//false false

