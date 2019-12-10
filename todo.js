//to do list를 구현할 요소에 접근 변수를 선언
//다른 gretting.js 변수들과 변수명이 같기 때문에 바꿔줌(충돌 방지)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; //To Dos Local Storage

let toDos = []; //To do list를 담을 Array

function deleteToDo(event){
    //console.log(event.target.parentNode);//.target을 통해 어떤 버튼이 클릭 되었는지 알 수 있지만 부모를 알 수 없음
    //console.dir를 통해 해당 버튼의 데이터를 얻고 parentNode 값으로 부모 li값을 얻음.
    const btn = event.target;//button 지정
    const li = btn.parentNode;//li 지정
    toDoList.removeChild(li);//html .js-toDoList 자식 태그 중 해당 li 삭제
    //.filter(fn) filter 함수는 해당 toDo Array를 forEach와 같이 각각의 data를 실행하여
    //fn 함수를 돌린다. fn 함수는 return true OR false로 구성된다.
    //fn 함수를 통해 return true가 된 것들로 새롭게 Array를 구성한다.
    const cleanToDos = toDos.filter(function(toDo){
        //이 때 toDo.id는 숫자, li.id는 문자여서 형변화 해줘야 비교가 됨
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;//toDos는 const였기 때문에 type을 let으로 바꿔 주어야 된다.
    saveToDos();
}

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
        delBtn.addEventListener("click", deleteToDo);//delBtn을 click했을 때 deleteToDo 실행
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
        //console.log(loadedToDos); String이기 때문에 JSON을 써서 Object로 변환 필요
        const parsedToDos = JSON.parse(loadedToDos);
        
        //Array는 자체적으로 forEach 함수를 가지고 있고 그 내부에 함수를 실행하면
        //Array 각각의 data에 해당 function을 실행해줌
        //function(toDo)에서 toDo라는 매개변수가 Array 각각의 data인듯 하다.
        parsedToDos.forEach(function(toDo){
            //console.log(toDo.text); 여기서 text는 Array toDoObj의 text value이다.
            //또한 function을 외부에 선언해서 실행시킬 수도 있다.
            paintToDo(toDo.text);
        });
    }
}

function init() {//1. init 함수, Form submit enter-key event 막기
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();