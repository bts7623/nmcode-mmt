# Proejct Review

### Project 개요
- VanillaJS를 알고 JS의 기초 다지기
- JS를 이용하여 To Do List, 날씨 정보를 불러오는 기능 개발하기
- Review 쓰는 이유
  <pre><code>Javascript단순 복습의 이유도 있고, 
  이번 Project를 따라하면서 느꼈던 JS 코딩의 순서, 설계 관점을 다시 한번 정리하기 위해.</code></pre>

---

### VanillaJS란?
Vanilla JavaScript = JavaScript라고 볼 수 있다.<br>
`바닐라`라는 뜻은 `평범한, 특별할 것 없는`이란 뜻을 같고 있으며 JQuery 등의 라이브러리를 쓰지않은<br>
부가기능을 제외한 기본적인 기능만 구현한 `순수한 JavaScript`라는 뜻을 갖게 된다.<br>
가볍고 빠른데다가 호환성이 좋고 모든 브라우저에 기본적으로 탑재되어 있어 별도의 설치가 필요 없다.<br>
JQuery가 죽어가고 JavaScript 자체를 사용하는 개발 트랜드와 관련 언어(Node.js, TypeScript)들이 각광받으며 바닐라 JS의 관심이 많아지고 있다.<br>
ES5, ES6 등 library별 버전이 있다.

---

### Structure of sourcecode
- HTML, CSS, JS
- HTML
  + App의 기본적인 틀로 CSS, JS추가 하는 포맷정도 인지하면 될듯
  + head
    * title을 넣어주고 하위에 CSS link를 넣어준다.([링크](https://technote.kr/187))
  + body
    * App의 핵심 기능 구현
      = 시간 표기: div class="js-clock"
      = 이름 입력 폼: form class="js-form form"
      = 저장된 이름을 포함한 문구 표기: h4 class="js-greetings greetings"
      = Todolist 입력 폼: form class="js-toDoForm"
      = 입력된 Todolist 표기: ul class="js-toDoList"
      = 날씨정보 표기: span class="js-weather"
    * 하위에 JS 추가([링크](https://technote.kr/187))
- CSS
  + 필요에따라 각각의 요소에 CSS추가
- JS
  + 세부 기능 하나하나 쪼개서 구현하는 것이 핵심
  + 시간 표기: clock.js
  + 이름 포함 문구 표기: gretting.js
  + TodoList 표기: todo.js
  + 배경화면 전환: bg.js
  + 날씨정보 표기: weather.js

### Program Flow
- 각각의 기능 설계순서와 js 내부 function 구현 구조 익히기
- 전체 Flow
```html  
  시간 표기하기 > 이름 받아 문구 표기하기 > todolist 받아 표기하기 > 배경 바꾸기 > 날씨표기
```
- 세부 Flow
```html
  1. 시간 표기하기 > html에 표기할 자리 만들기 > 시간 받아오기 > 1초 씩 실행하기
  2. 이름 받아 문구 표기하기 > html에 표기할 자리 만들기 > 
```

### Program Flow Detail
- 시간 표기하기
  + html에 시간이 들어갈 공간 만들고 "clock.js" 추가
  ```html
    <div class="js-clock">
      <h1>00:00</h1>
    </div>
  ```  

  + clock.js
    * Flow : getTime() > setInterval > init()
      = init 실행 시 시간을 불러와 화면에 뿌리고 이 작업을 1초에 한번씩 한다.
    * init(): 해당 js에서 실행할 실질적인 함수
      = 현재 시간을 화면에 뿌려주는 getTime() function과 1초에 한번씩  getTime()을 실행하는 function을 넣는다.
      ```javascript
        function init(){
          getTime();
          setInterval(getTime, 1000);
        }
      ```
    * 시간을 화면에 뿌려줄 h1 태그에 접근하는 경로를 변수에 담는다.
      = 경로를 변수에 담아 편하게 함수에 활용하고 경로 변경 시에도 선언한 변수만 바꿔주면 된다.
      ```javascript
        //최상위 폴더인 document 하위에 있는 js-clock class를 가진 태그를 찾음
        //js-clock을 class로 갖는 div 하위에 h1 태그를 찾음
        const clockContainer = document.querySelector(".js-clock"),
              clockTitle = clockContainter.querySelector("h1");
      ```
    * function getTime()
      = Date Class를 할당 받아 시, 분, 초를 변수에 담고 h1 태그 경로에 innerText 해줌
      = 이 때 0~9까지는 한자리 수로 표기되기 때문에 앞에 문자 '0'을 넣어줌
      = 백틱(`) 안에 또 백틱(`)을 넣을 수 있는 것이 신기함.
      ```javascript
        function getTime(){
          const date = new Date();
          const minutes = date.getMinutes();
          const hours = date.getHours();
          const seconds = date.getSeconds();
          clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                                    minutes < 10 ? `0${minutes}` : minutes}:${
                                    seconds < 10 ? `0${seconds}` : seconds}`;
        }
      ```
- 이름 받아 문구 표기하기
  + html에 자리 만들기(text 입력 폼, 입력받은 text를 뿌릴 h4 태그)
    * js에서 접근하는 tag들은 js-form, js-greeting등으로 class를 부여한다.
  ```html
      <form class="js-form form">
        <input type="text" placeholder="what is your name?" />
      </form>
      <h4 class="js-greetings greetings></h4>
  ```
  
  + gretting.js
    * Flow : init() > loadName() > askForName() > handleSubmit > paintGreeting(), saveName()
                                 > paintGreeting()
      = 이름이 있으면 화면에 뿌려주고, 없으면 입력 받아 local에 저장한다.
      = 기능을 짤 때도, 데이터를 체크하고, 있으면 뿌리고, 없으면 받아 저장받는 것으로 설계한다.
    * loadName()이 이 기능의 실질적인 함수이다.
    * 역시나 모든 경로와 변수명은 const로 정의해둔다.
    * paintGreeting()
      = .classList : 해당 element에 class list를 받아온다.
        - .classList.add(CLASS_NM) : 해당 element에 CLASS_NM 클래스를 추가한다.
        - .classList.remove(CLASS_NM) : 해당 element에 CLASS_NM 클래스를 제거한다.
      = 숨길 .js-form을 변수로 저장하고 이름 입력 시 showing class를 지운다.
      = .js-greeting을 변수로 저장하고 이름 입력 시 showing class를 추가한다.
      ```javascript
        const form = document.querySelector(".js-form"),
              greetirng = document.quertSelector(".js-greetings");
        const SHOWING_CN = "showing";
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
      ```
      = greeting.innerHTML을 통해 이름을 입력 받아 text를 뿌려준다.
---

### JavaScript
- 최근 JS에서는 백틱으로 편하게 text를 입력할 수 있다.
  + 별도의 (+)기호 없이 text를 죽 입력하면 되고, 변수는 ${변수명}으로 넣을 수 있다.
- .querySelector : 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환([상세보기](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector))
  + 깊이 우선(depth-first) 전위(pre-order) 순회로 탐색하며 첫 번째 요소부터 자식 노드의 수 기준으로 순회
  + document.querySelector(*selectors*);
  + *selectors*종류 : ".class", "#id", "tag"
    * 더 복잡하게도 가능
    ```javascript
      //user-panel, main class를 가진 div tag 안의 name이 login인 첫번째 input tag
      //<div class="user-panel main">
      //  <input type="text" name="login">
      //</div>
      document.querySelector("div.user-panel.main input[name=login]");
    ```
  + 해당 옵션의 모든 값을 가져오려면 querySelectorAll을 쓰면 된다.([상세보기](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll))
    * document.querySelectorAll("p"); > document 내 p tag를 다 가져온다.
    * NodeList로 받아오며 NodeList는 Array가 아니다.
      = 따라서 foreach 등으로 뿌려서 봐야하고, Array.form()을 통해 형변환도 가능하다.(오래된 브라우저 제외)
    * Option
      = class가 A 또는 B인 모든 div element 목록 받기 > 콤마(,)로 구분
      ```javascript
         document.querySelectorAll("div.A, div.B");
      ```
      = id가 "test"인 컨테이너 안에 있는 div tag가 부모인 highlighted class를 가진 p tag list
      ```javascript
         const container = document.querySelector("#test");
         const list = container.querySelectorAll("div.highlighted > p");
      ```
- setInterval(function(), time) : 특정 함수 일정 시간 반복
  + 위에 사용되었듯 setInterval(getTime(), 1000)은 getTime 함수를 1초에 한번씩 실행한다.
  + 해당 setInterval 함수를 변수에 담아 실행 후 clearInterval(setInterval)로 반복을 종료할 수 있다.
  + typeof setInterval(fn, time) 실행 시 "number" type이 찍히며 console에 setInterval을 찍어보면 1씩 숫자가 증가한다.
    = clearInterval 실행 시 setInterval에서 넘겨받은 숫자로 해당 반복을 종료하는 듯 하다.
  + 비슷한 기능으로 setTimeout(fn, time)이 있으며, 해당 시간 지연 후 함수를 실행한다고 한다.
  
- .classList : 해당 element의 class들을 list로 받아온다.
  + .remove, .add,  .toggle
    = 해당 클래스를 지우고, 추가하고, 토글한다.
    = 없는 class를 remove한다고 exception이 걸리진 않는다.
    = toggle 시 제거하면 false, 추가하면 true를 반환한다.
  + item(index): 해당 list의 index값을 넣어 데이터를 받는다.
  + contains(String): 해당 class가 존재하는지 판별
  + replace(old, new): 존재하는 class를 새로운 class로 교체
  
- innerText, innerHTML 차이
  + 둘 다 해당 태그에 글을 입력하는 것인데, innerHTML의 경우 tag 입력 시 tag를 html화 하여 출력한다.
    = innerText(<h1>하하</h1>): <h1>하하</h1>
    = innerHTML(<h1>하하</h1>): ##하하
##### var, let, const([참고링크](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d))
