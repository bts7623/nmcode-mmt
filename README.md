# nmcode-mmt
create momentom project with Vanilla JS


# Object 
- JS 기본개념 다지기
- JS App 만들기
- Desktop App (이게 일반 exe와 같은 프로그램인듯)

# GitHub Rule
- 짧은 영상이 많기 때문에 의미 있는 부분만 메모해둔다.

# History
#### 2019.09.16 : #0 ~ #1.2
#### 2019.09.17 : #1.3 ~ #1.5
#### 2019.09.18 : #1.6
#### 2019.09.21 : #1.7 ~ #1.8
#### 2019.09.22 : #1.9 ~ #2.1.1
#### 2019.09.25 : #2.2
#### 2019.09.29 : #2.3
#### 2019.09.30 : #2.4
#### 2019.10.04 : #2.5
#### 2019.10.07 : #2.6 ~ #2.7
#### 2019.10.08 : #3.1 ~ #3.2
#### 2019.10.11 : #3.3
#### 2019.10.14 : #3.4
#### 2019.10.15 : #3.5
#### 2019.12.10 : #3.6

# JS
- init() : 해당 페이지의 초기화 작업을 할 때 주로 사용하는 함수
- querySelector()
  - html에서 해당 요소에 접근
  - #title, .title, #title .title의 식으로 해당 요소의 id와 class로 접근
  - 딱 하나의 요소에만 접근이 가능하며 조건 중복 시 가장 위에 있는 첫 요소에 접근
- querySelectorAll()
  - querySelector()와 같지만 하나가 아닌 조건이 중복된 여러 요소를 모두 받음
  - nodeList로 받기 때문에 for, foreach문을 사용해야 함
  - ','를 이용해서 여러요소를 한번에 가져올 수 있음  
- addEventListner()
  - document 내 특정 요소에 event를 등록할 때 사용
  - addEventListner("click", handleClick)등으로 행동과 함수를 연결해둠
  - 해당 함수 handleClick을 통해 독립성을 높여 유지보수를 높일 수 있다.
  - querySelectorAll()를 통해 같은 요소를 한번에 받아(ex_button) init()에서 addEventListner()로 이벤트를 넣어주면 추후 새로운 버튼을 추가해도 별도의 작업 없이 효과를 추가해줄 수 있다.
- localStorage.setItem, getItem을 통해 사용자 PC에 데이터를 저장할 수 있다.
  - localStorage.setItem(key, value);
- 독립성, 유지보수성
  - 기능별로 js를 만든다.
  - js 내에서도 작은 function들을 하나하나 분리한다.
    - 작은 function 3개를 1개의 function에서 실행
  - function에서 사용하는 요소와 변수명은 따로 최상단에 선언해둠
    ```javascript
    const form = document.querySelector(".js-form"), 
      input = form.querySelector("input"),        
      greeting = document.querySelector(".js-greetings");

    const USER_LS = "currentUser",
      SHOWING_CN = "showing";
    ```
 

# Concept
#### #0 Introduction : 기본 인트로
#### #1 Theory : 이론
- #1.1
  - 모든 컴퓨터에는 브라우저가 있고 브라우저는 JS로 되어 있어서 모든 브라우저는 JS가 기본적으로 깔려있다.
    Visual Studio Code와 같이 Desktop App도 만들 수 있다.
- #1.2
  - JS로 WEB, Player, Game 등 다양한 프로그램을 만들 수 있음
  - JSthreejs.org / World Draw / 3DC / taotajima.jp / three.js / Impact Game / Socket.IO
  - JS 대체언어가 없다.
  - Web App, RealTime App, Simple App 등 다방면에 다채롭게 사용
- #1.3
  - ES5, ES6 등의 library별 버전이 있지만 아직 다루지 않을 것.
- #1.4
  - VanillaJS는 그냥 JS라고 보면 되는건가?
  - 다른 모든 것들은 결구 JS의 기본 구문을 이쁘게 작성하게 만들고 컴파일해서 사용하는 것이다.
    - 따라서 가장 기본이 되는 것을 배워야 함
- #1.5
  - repl.it (Ripple)
    - 별도의 설치 없이 사용가능한 Code Editor, Visual Studio Code Editor 사용해도 무방
    - 큰 프로젝트는 VSC, 컨셉 등을 보여줄 때는 Ripp le로 진행
    - JavaScript로 new repl 하면 NodeJS로 만들어짐. HTML, CSS, JS로 만들어야함
  - <script> 구문은 <body> tag 가장 마지막 추가
  - 모든 컴퓨터에는 JS가 깔려있다. 브라우져랑 함게 구성되어있다. → 그렇기에 강력한 언어다
- #1.6
  - Lines이 아닌 Expressions로 구분
    + Expression은 수학적으로 어떠한 식, 꼴의 뜻으로 세미폴론(;)을 붙이는 코드 단위로 생각하면 될듯
  - Variable(변수)은 Creaet, Initialize, Use(생성, 초기화, 사용) 한다. 
  - Variable 생성 및 초기화 시 let??을 씀 왜지 → #1.7
- #1.7
  - const(constant: 상수), let, var
  - var로 모든 것을 했었지만 지금은 let과 const가 생김
  
- #1.8
  - String: 끈. 끝이 있는 것. text string
  - Float: floating number 떠돌이 소숫점을 갖고 있는 숫자

- #1.9
  - camel case로 변수명 지정
    - 띄어 쓰기하는 부분을 대문자로 표현
  - Array
    - const daysOfWeek = []; 대괄호로 Array 선언
    - String, num, bool 여러 type의 데이터 넣어도 다 들어감
    
- #1.10
  - Object
    - const userInfo = {}; //Object는 중괄호로 선언
      - const userInfo = { //이런식으로 데이터 값을 넣어줌
          name: "BTS",
          age: 29,
          gender: "Male",
          isHandsome: true
        }
      - console.log(userInfo.age) //이런 식으로 원하는 값 가져옴
      - userInfo.age = 40 //이렇게 Object 값 수정 가능. Setter 와 같음
    - Array와 Object 혼용 가능
    ```javascript
        const userInfo = {
          name: "BTS",
          age: 29,
          favoriteMusic: ["벚꽃엔딩", "흔들리는꽃들속에서","6 to 9"],
          myGrade: [
            {
              subject: "반소자", 
              grade: "F"
            }, {
              subject: "현사패", 
              grade: "A0"
            }, {
              subject: "공학수학1", 
              grade: "B+"
            }]
        };
    ```
      - console.log(userInfo.myGrade[1].grade); //이런 식으로 타고타고 데이터를 불러올 수 있음  
  - error
    - unexpected identifier : 뜻밖의 식별자
    - unexpected token , : 뜻밖의 , 
    - undefined : 정의되지 않음
    - JS error는 HTML, CSS에 문제를 일으키지 않음
  
- #2.1
  - 내장함수(built-in function)
    - alert, console.log와 같은 기존에 JS에 내장되어 있는 함수
  - function 함수명(인자){함수내용}; //함수 선언
    - 인자: argument //함수에 넣어줄 변수, arg1, arg2, arg3... 여러개 선언 가능
    - 따로 type을 정해주진 않는듯. fuction sayHello(potato){console.log("Hello", potato)}
      - 이 경우에 console.log입장에서는 arg1, arg2라고 볼 수 있음. 
      ```javascript
      
        function sayHello(potato, kimchi, oil){
             console.log("Hello", potato, "My name is ", kimchi, ", age is ", oil);
        }

        sayHello("KYG", "BTS", 29) //Hello KYG My name is  BTS , age is  29
      ```
  - ~~내가 알게된 새로운 것은 console.log()에서 ','로 구분해도 알아서 띄어쓰기가 되어 출력된다는 점.. 기존에는 '+'해줬었는데.~~
    - 이것도 ES6의 경우에서만 인듯?
  - ~~또한 JS 내 String도 큰 따옴표("")로 String을 쓴다는 것.~~ --> 큰따, 작따 상관 없음

- #2.1.1
  - 백틱(`)
    - String을 이쁘게 쓰기위해 고안된 token //String 구문 안에 변수를 그대로 쓸 수 있어 별도의 ',' '+' 'space'를 쓸 필요가 
    ```javascript
      - console.log(`My Name Is ${name}, Age Is ${age}`);
    ```
  - return
    ```javascript
    const calculator = {
      plus : function(a, b){
        return a + b;
      },
      multi : function(a, b){
        return a * b;
      }
    }
    
    const plus = calculator.plus(4, 2);
    const multi = calculator.multi(4, 2);
    
    console.log(`plus: ${plus}, multi: ${multi}`); //plus: 6, multi: 8
    ```
    
- #2.2 
  - CSS에서 id로 효과줄 때 #id{내용}으로 줌
  - DOM: Document Object Module
    + html tag를 가져가서 객체로 만듦
    + JS를 통해 HTML 태그의 모든 것을 DOM객체로 만들 수 있다.
  ```javascript
  const title = document.getElementById("title"); // html 해당 id를 가진 태그의 데이터를 가져옴
  title.innerHTML = "Hi! From JS"; // title이 id인 태그의 내용을 바꿈
  ```
  
- #2.3
  - console.dir(title);을 통해서 해당 Element로 할 수 있는 것들을 알 수 있다.
    + 개발자모드 console에서 펼쳐보기
    + console.dir(document);를 통해서 document의 이벤트 확인
      + document.title = '어쩌구저쩌꾸' 등으로 모든 요소를 JS로 수정 가능
    + console.dir를 통해 해당 객체가 어떤 스크립트 이벤트들이 적용되어 있는지 확인할 수 있는듯
  - JS의 객체표기법으로 표기되어있고 해당 모든 이벤트값을 수정할 수 있음
  - document.getElementById, ByClassName, ByTagName 등으로 찾을 수 있음
    + .querySelector(""); 모든 자식들 중에 찾아라
      + "#title" id가 title인 것
      + ".title" class가 title인 것
      + 해당 값이 없으면 null을 받아옴 = undefined 같은 것

- #2.4
  - JS는 event에 반응하기위해 만들어짐(input, change, click 등)
  - 이러한 event를 중간에 가로챌 수 있다.
  ```javascript
      function handleResize(){
        console.log("I have been resized");
      }
      
      window.addEventListener("resize", handleResize); //윈도우 창 크기 변경 시 handlerResize 함수 작동
      // 이 때 handleResize가 아닌 handleResize());라고 괄호를 넣으면 윈도우 변경과 상관없이 즉시 함수가 작동함.중요
  ```
  - 해당 이벤트를 로그로 볼 수 있다.
  ```javascript
      function handleResize(event){ //윈도우창 변경 시 handleResize 함수가 작동하면서 해당 event를 console에 찍어줌
        console.log(event);
      }
      
      window.addEventListener("resize", handleResize);
  ```
  - title에 click 이벤트를 적용
  ```javascript
    const title = document.querySelector("#title");

    function handleClick(){
      title.style.color = "blue";
    }

    title.addEventListener("click", handleClick);
  ```
  
- #2.5
  - 아주 오래된 스크립트로 prompt가 있음. (현재는 거의 쓰지 않지만 작동은 함)
  - 입력 받은 text를 변수로 넣어줄 수 있지만 지금은 거의 안씀
  ```javascript
      prompt("Ask somthing"); //text를 입력할 수 있는 팝업 발생
  ``` 
  - 그냥 if, else, and, or
  
- #2.6
  - https://flatuicolors.com/   → 색깔 코드를 얻을 수 있는 페이지
  - 기본컬러를 정할 때 변수를 대문자와 언더바로 선언 const BASE_COLOR
  - init 함수를 통해 해당 페이지를 초기화함
  - addEventListener를 통해 다양한 이벤트 활용
    + addEventListener를 이용한 함수 사용 시 함수명을 handle함수명으로 하는 듯
    + "javascript dom event mdn"를 검색하여 다양한 이벤트 찾아보기
    + 이벤트의 근원을 찾고 싶으면 MDN을 항상 검색해볼 것
    + Network가 끊겼을 때 작동하는 이벤트 Offline
    ```javascript
    function handleOffline(){
      console.log("Network Offline"); //Network Offline log 찍음
    }
    
    window.addEventListener("offline", handleOffline); //네트워크 연결이 끊겼을 때 handleOffline 함수 작동
    ```
  - 2.6 JS 코드
  ```javascript
  const title = document.querySelector("#title");

  const BASE_COLOR = "rgb(52, 73, 94)"; //#34495e를 JS가 rgb로 표기해줌
  const OTHER_COLOR = "#7f8c8d";
  
  function handleClick() {
      const currentColor = title.style.color;
      if(currentColor === BASE_COLOR){
          title.style.color = OTHER_COLOR;
      }else{
          title.style.color = BASE_COLOR;
      }
  }
  
  function init() { //초기화 함수
      title.style.color = BASE_COLOR;
      title.addEventListener("mouseenter", handleClick); //event를 등록하는 방식, 다중 중복 등록이 가능
      //title.addEventListener("click", handleClick); //"click" 부분에는 다양한 동작들을 넣을 수 있음. 더블클릭, 마우스오버 등
  }
  
  init();
  ```

-#2.7
  - 해당 class 위에 마우스 커서를 두면 포인터로 바뀌도록 하는 명령
  ```css
    .btn {
      cursor: pointer;
    }
  ```
  - JS로 className을 바꾸는 것은 기존 Class를 고려하지 않고 강제로 바꾼다.
  - Element class name MDN 검색
    + ClassName을 바꾸는 것은 모든 Class를 없애고 바꾸기 때문에 ClassList의 Method를 사용해야함
    + ClossList Method에는 add, remove 등 특정 class를 제어할 수 있다.
  - classList Method: https://developer.mozilla.org/ko/docs/Web/API/Element/classList
  - 1차 if, else로 구현
    + JS
    ```javascript
        const title = document.querySelector("#title");

        const CLICKED_CLASS = "clicked";
  
        function handleClick(){
        //const currentClass = title.className;
        const hasClass = title.classList.contains(CLICKED_CLASS); //다수의 className을 갖고 있을 때, 해당 클래스의 포함유무를 true, false return
        //if (currentClass !== CLICKED_CLASS){
        if (!hasClass){
            //title.className = CLICKED_CLASS; //모든 클래스를 날리고 하나의 클래스만 남김
            title.classList.add(CLICKED_CLASS); //className에 CLICKED_CLASS 하나만 추가
        } else {
            //title.className = ""; //모든 클래스를 날림
            title.classList.remove(CLICKED_CLASS); //CLICKED_CLASS 하나만 지움
        }
    }
    
    function init() { //초기화 함수
        title.addEventListener("click", handleClick); //event를 등록하는 방식, 다중 중복 등록이 가능
        //title.addEventListener("click", handleClick); //"click" 부분에는 다양한 동작들을 넣을 수 있음. 더블클릭, 마우스오버 등
    }
    
    init();
    ```
    + CSS
    ```CSS
      body{
        background-color: #ecf0f1;
      }
      
      .btn {
          cursor: pointer;
      }
      
      h1{
          color: #34495e;
      }
      
      .clicked{
          color: #3498db;
      }
    ```
    + HTML
    ```html
      <!DOCTYPE html>
      <html>
        <head>
          <title>Something</title>
          <link rel="stylesheet" href="index.css" />
        </head>
        <body>
          <h1 id="title" class="btn">This work!</h1>
          <script src="index.js"></script>
        </body>
      </html>
    ```
  - 위 작업을 title.classList.toggle 하나로 해결 가능
    ```javascript
       //hasClass로 true, false를 return 받아 if, else로 구현
       function handleClick(){
           const hasClass = title.classList.contains(CLICKED_CLASS);
           if (!hasClass){
               title.classList.add(CLICKED_CLASS); //className에 CLICKED_CLASS 하나만 추가
           } else {
               title.classList.remove(CLICKED_CLASS); //CLICKED_CLASS 하나만 지움
           }
       }
       
       //toggle로 구현
       function handleClick(){
          title.classList.toggle(CLICKED_CLASS);
       }
    ```
    
-#3.1 (제작)
  - F12 개발자모드 콘솔에서 date 확인
    ```javascript
      const date = new Date() //undefined > 선언
      date //Tue Oct 08 2019 09:34:43 GMT+0900 (한국 표준시) > 해당 date 정보 표기
      date.getDay() //2 > new Date() 기준 요일인 화요일을 숫자로 표기 (1부터 월요일)
      date.getDate() //8 > new Date() 기준 날짜 표기
      date.getHours() // 9 > new Date() 기준 시간 표기
      date.getMinutes() // 34 > new Date() 기준 분 표기
    ```
    - 다시 date를 초기화시키는 방법을 모르겠음
  - 모든 것은 나눠서 한다. function init(){} init();을 먼저 해놓고 필요한 const를 정의하고 필요한 function을 정의하고 init()에 넣고
  ```javascript
        const clockContainer = document.querySelector(".js-clock"), //document의 자식에서 찾음, ','로 2개의 constant를 정의
          clockTitle = clockContainer.querySelector("h1"); //clockContainer의 자식에서 찾음(div 하위)
      
        function getTime(){
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const seconds = date.getSeconds();
            clockTitle.innerText = `${hours}:${minutes}:${seconds}`; // Date객체에서 시분초를 불러와 clockTitle h1에 넣어준다.
        }
        
        function init(){
            getTime(); // init 함수를 통해 페이지 초기화 시 getTime 함수를 실행한다.
        }
        
        init();
  ```
  
-#3.2
  - setInterval(fn, time);
    - 특정 함수 fn을 정해진 시간 time마다 반복 시키는 함수, 굉장히 간단하고 편리함
    - 해당 함수를 통해 getTime을 1초마다 실행시킴
  - 시분초가 10보다 작을 때 0~9로 뜨기 때문에 앞에 0을 붙여 00~09로 뜨게 해줘야함
    - ternary operatioin(삼항연산자)을 이용하여 추가
  ```javascript
    const clockContainer = document.querySelector(".js-clock"), //document의 자식에서 찾음, ','로 2개의 constant를 정의
    clockTitle = clockContainer.querySelector("h1"); //clockContainer의 자식에서 찾음(div 하위)

    function getTime(){
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                                  minutes < 10 ? `0${minutes}` : minutes}:${
                                  seconds < 10 ? `0${seconds}` : seconds}`; // Date객체에서 시분초를 불러와 clockTitle h1에 넣어준다.
                                                                            //ternary operator(삼항연산자)를 활용하여 10보다 작을 때 앞에 0을 넣어줌
    }
    
    function init(){
        getTime(); // init 함수를 통해 페이지 초기화 시 getTime 함수를 실행한다.
        setInterval(getTime, 1000);
    }
    
    init();
  ```

-#3.3
  - localStorage에 데이터를 저장하여 웹에서 뿌릴 수 있도록 한다.
  - 개발자모드>Application>왼쪽 하단부 Storage에 Local Storage를 비롯한 다양한 저장소들이 있다.
    + 이를 통해 데이터를 저장할 수 있고, 이는 새로고침을 해도 사라지지 않고 저장되어 있다.
    ```javascript
      localStorage.setItem("nico", false) //Key, Value 저장 가능
      localStorage.getItem("nico") // false 출력, 개발자>Appl>local Stor 가서 데이터 값 바꾸면 바뀜
    ```
  - greetings(인사말) js를 생성하여 localStorage에 저장되어 있는 이름을 뿌려준다.
    - localStorage 안에 currentUser 데이터가 있으면 loadName()을 통해 paintGreeting()을 실행하여 인사말 출력
    ```javascript
    //gretting.js
    const form = document.querySelector(".js-form"), //querySelector class, id, tag 등으로 element 값 가져옴. 조건 중복 가능.
    input = form.querySelector("input"),         //단, 가장 첫번째의 1개의 요소만 가져옴.
    greeting = document.querySelector(".js-greetings");

    const USER_LS = "currentUser",
        SHOWING_CN = "showing";
    
    function paintGreeting(text) {
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerHTML = `Hello ${text}`;
    }
    
    function loadName() {
        const currentUser = localStorage.getItem(USER_LS);
        if (currentUser === null) {
    
        } else {
            paintGreeting(currentUser);
        }
    }
    
    function init() {
        loadName();
    }
    
    init();
    ```
      
-#3.4
  - form submit Default 값으로 인해 Enter 클릭 시 해당 form value 값들을 어디론가 보내려고 함
    - 별도의 설정이 없을 시 새로고침되며 다 사라짐
  - localStorage에 데이터 없으면 입력 폼 제공, 있으면 화면에 뿌려주기
    - 화면에 뿌리면서 입력폼 숨기기
    - 데이터 없을 시 입력폼 보이기
      - 데이터 입력 후 Enter key 입력 시
        - 입력폼 숨기면서 화면에 메시지 뿌리기
        - 입력 데이터 localStorage에 저장하기
    ```javascript
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
    ```
    
-#3.5    
  - To Do List
    - text box를 제공하고 내용 입력 후 Enter key 누르면 local Storage에 저장하면서 화면에 리스트로 뿌려주기
      + init() 초기화 및 메인 함수 실행
      + loadToDos 메인함수, local Storage에 데이터가 있으면 화면에 뿌려줌
      + handleSubmit Submit 시 작동
      + paintToDo 화면에 뿌려줌
    ```javascript
    //to do list를 구현할 요소에 접근 변수를 선언
    //다른 gretting.js 변수들과 변수명이 같기 때문에 바꿔줌(충돌 방지)
    const toDoForm = document.querySelector(".js-toDoForm"),
        toDoInput = toDoForm.querySelector("input"),
        toDoList = document.querySelector(".js-toDoList");
    
    const TODOS_LS = "toDos"; //To Dos Local Storage
    
    function paintToDo(text) {//4. 화면에 뿌혀줌
        const li = document.createElement("li");//li 생성
        const delBtn = document.createElement("button");//삭제 버튼 생성
        delBtn.innerHTML="❌";//버튼 이모지 추가
        const span = document.createElement("span");//span 추가
        span.innerText = text;//span에 text 추가
        li.appendChild(delBtn);//li에 delBtn 추가
        li.appendChild(span);//li에 span 추가
        toDoList.appendChild(li);//ul에 li 추가
    
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
    ```
    - createElement로 <tag>를 생성하고 appendChild로 자식 요소로 추가한다.
  
-#3.6
  - TodoList data를 localStorage에 저장하는 함수를 만들어 저장한다.
  - localStorage에 데이터는 String type만 저장할 수 있다.
    - JS의 Array를 담을 경우 String이 아니기 때문에 Object로 표기한다.
    - JSON.stringify(Object)를 통해 JS Object를 String으로 바꿔준다.
  - JSON(JavaScript Object Notation / 자바스크립트 오브젝트 표기법)
    - data전달할 때, JS가 그걸 다룰 수 있도록 Object로 바꿔주는 기능
    - 반대로 Obeject를 String으로 변환해주기도 하고 String을 Object로 바꿔주기도 함
