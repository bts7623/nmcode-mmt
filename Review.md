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
# 20191223 할일
각각의 js들을 분석하면서 쓰이는 JS 기능들 아래에 정리하기
  
---

### JavaScript

##### var, let, const([참고링크](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d))
