const filterView = document.querySelector('#filter_view');
const filterList = document.querySelector('.filter_list');
let filterListShowHide = false; //초기값(숨김)(자바스크립트가 none, block을 인식하지못하기 때문에 상태변수를 따로 만듦.)
console.log(filterView, filterList);

// 필터목록 초기 숨기기(false)(객체.속성.속성 = 값;)
filterList.style.display = 'none';//CSS 적용용

// 필터보기를 클릭시
filterView.addEventListener('click', function(){
    // 필터가 숨겨진 상태면(false) -> 보이기
    // if(filterList == style.display = 'none';){} //(x)
    if(filterListShowHide == false){
        filterList.style.display = 'flex';
        //filterListShowHide = true;
        // 위 코드 해석
        // flex로 보이는 상태가 됐으므로 js의 상태변수도 참(true)로 대입해서 추적가능하게 만들기
        filterListShowHide = !filterListShowHide;
        // 위 코드 해석
        // 상태변수의 값을 반전(!)시켜서 상태변수에 대입(=) 한다.
        console.log(filterListShowHide);
    }
    // 필터가 보이는 상태면(true) -> 숨기기
    else if(filterListShowHide == true) {
        filterList.style.display = 'none';
        filterListShowHide = !filterListShowHide;
    }
})

// 필터기능
// 전체보기 -> 사과, 바나나, 브로콜리, 당근
// 과일 -> 사과, 바나나
// 채소 -> 브로콜리, 당근
const filterA = filterList.querySelectorAll('.list');
const filterContents = document.querySelectorAll('.contents li');
console.log(filterA, filterContents);//NodeList 출력시 [index] 개별구분

// data-name, data-category
// 필터 data-name 중 원하는 값을 클릭하면 data-category 중 같은 값을 가지고 있는 대상을 화면에 출력함.

for(let f of filterA){//필터 보기 메뉴
    console.log(f); //for문으로 반복개별출력 index 필요없음
    f.addEventListener('click', function(e){//1.클릭했을때
        e.preventDefault();
        console.log('클릭된 a : ', f);
        for(let list of filterContents){//필터보기메뉴 클릭시 인식해야하는 상품목록들
            console.log(list);
            //클릭한 f가 전체 보기면 -> list 전체 보이기
            console.log(f.dataset.name);//클릭한 필터의 dataname 출력 테스트(객체로)
            list.style.display = 'none'; // 2.모두 숨겼다가
            if(f.dataset.name == 'all') list.style.display = 'block'; // 3. 목록전체보여라
            //클릭한 f가 과일 -> data-name="fruit"와 일치하는 list 찾아서 보이기
            //console.log(list.children[0].dataset.category);
            //클릭한 f가 채소 -> data-name="vaggi"와 일치하는 list 찾아서 보이기
            else if(f.dataset.name == list.children[0].dataset.category) list.style.display = 'block'; //전체가 아니면 내가 선택한 것과 같은것만(fruit, vaggi) 골라서 보여라
        }
    })
}