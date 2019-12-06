//to do list를 구현할 요소에 접근 변수를 선언
//다른 gretting.js 변수들과 변수명이 같기 때문에 바꿔줌(충돌 방지)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; //To Dos Local Storage

function paintToDo(text) {//4. 화면에 뿌혀줌
    if(text !== ""){
        const li = document.createElement("li");//li 생성
        const delBtn = document.createElement("button");//삭제 버튼 생성
        delBtn.innerHTML="❌";//버튼 이모지 추가
        const span = document.createElement("span");//span 추가
        span.innerText = text;//span에 text 추가
        li.appendChild(delBtn);//li에 delBtn 추가
        li.appendChild(span);//li에 span 추가
        toDoList.appendChild(li);//ul에 li 추가
    }
}

function handleSubmit(event) {//3. enter key 입력 시 화면에 뿌려줌
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){//2. Todo List를 가져오는 함수
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null){
    }
}

function init() {//1. init 함수, Form submit enter-key event 막기
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();