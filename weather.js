const API_KEY = "d989768f5e32b4b9abe75818bf194458";
const COORDS = "coords";

function getWeather(lat, lng){ //위도, 경도
    // API 주소를 등록하여 정보를 받아오는 법, 샘플페이지 url처럼 뒤에 appid를 추가해준다.

    fetch(//units=metric을 해줘야 temp를 섭씨로 받아온다.
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
    );
    
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude; //위도
    const longitude = position.coords.longitude; //경도
    // console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    const coordsObj = {
        latitude, //latitude = latitude; 변수명과 value명이 같을 경우
        longitude //longitude = longitude;
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){ // Coords : 좌표
    // 위치정보를 불러오며 (성공 시 위치 return, 실패 시 error return, Option)을 이용할 수 있다.
    // 실행 시 위치정보 수집 동의를 요청하며 수락 시 받아오고, 거절 시 거절 function이 실행된다.
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords(); // 위치 정보가 null이면 위치 정보를 요청
    } else {
        // getWeather 위치 정보가 있으면 날씨정보 호출
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords(); 
}

init();