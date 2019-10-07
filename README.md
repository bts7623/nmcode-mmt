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
