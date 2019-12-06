const form = document.querySelector(".js-form"), //querySelector class, id, tag 등으로 element 값 가져옴. 조건 중복 가능.
    input = form.querySelector("input"),         //단, 가장 첫번째의 1개의 요소만 가져옴.
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {//6. localStorage에 데이터 저장
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {//5. 입력 데이터 처리
    //Enter key 입력 시 form 데이터 보내고 새로고침 되는 것 막기
    event.preventDefault();
    const currentValue = input.value;//입력 값 변수 저장
    paintGreeting(currentValue);//3.으로 데이터 넘겨서 화면에 뿌리기
    saveName(currentValue);//데이터 local에 저장
}

function askForName() {//4. 데이터 없을 시 입력 폼 제공
    form.classList.add(SHOWING_CN);//입력 폼 보이기
    //Enter key 입력 시(submit) 이벤트 발생
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {//3. 입력한 데이터를 화면에 띄우는 기능
    form.classList.remove(SHOWING_CN);//입력 폼 숨기기
    greeting.classList.add(SHOWING_CN);//<h4> 보이기
    greeting.innerHTML = `Hello ${text}`;//<h4> 텍스트 추가
}

function loadName() {//2. gretting.js의 실질적인 function
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //localStorage에 USER_LS(=currentUser) 데이터가 없으면
        askForName(); 
    } else {
        //localStorage에 USER_LS(=currentUser) 데이터가 있으면
        paintGreeting(currentUser);
    }
}

function init() {//1. 페이지 초기화
    loadName();
}

init();