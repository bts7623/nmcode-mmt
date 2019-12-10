//to do list를 구현할 요소에 접근 변수를 선언
//다른 gretting.js 변수들과 변수명이 같기 때문에 바꿔줌(충돌 방지)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; //To Dos Local Storage

const toDos = []; //To do list를 담을 Array

function saveToDos(){ //입력된 Todos Array를 local Storage에 저장
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //Array JS Object를 String으로 변환
}

function paintToDo(text) {//4. 화면에 뿌혀줌
    if(text !== ""){
        const li = document.createElement("li");//li 생성
        const delBtn = document.createElement("button");//삭제 버튼 생성
        const span = document.createElement("span");//span 추가
        const newId = toDos.length + 1;
        delBtn.innerHTML="❌";//버튼 이모지 추가
        span.innerText = text;//span에 text 추가
        li.appendChild(delBtn);//li에 delBtn 추가
        li.appendChild(span);//li에 span 추가
        toDoList.appendChild(li);//ul에 li 추가
        li.id = newId;
        
        const toDoObj = { //To do list 가 추가될 때마다 Array에 넣어줌
            text: text,
            id: newId
        };

        toDos.push(toDoObj);
        saveToDos();//push한 이후에 호출해야 locaStorage에 넣는다.
    }
}

function handleSubmit(event) {//3. enter key 입력 시 화면에 뿌려줌
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){//2. Todo List를 가져오는 함수
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        console.log(loadedToDos);
        //console.log(loadedToDos); String이기 때문에 JSON을 써서 Object로 변환 필요
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
    }
}

function init() {//1. init 함수, Form submit enter-key event 막기
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();