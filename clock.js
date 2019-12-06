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

