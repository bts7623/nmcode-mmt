//Image Backgroud Set

const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`; //image 경로 설정
    image.classList.add("bgImage");
    body.appendChild(image);
    //table listner를 이미지화 하기 위해 even listener를 연결 > 로딩 화면 시각화
    //image.addEventListener("loadend", handleImgLoad);
    //API가 아니기 때문에 어렵다? 건너뛰는 듯
}

function genRandom(){ //generate: 생성하다
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();//사진의 숫자만큼 랜덤숫자를 받아오는 함수
    paintImage(randomNumber);//받아온 랜덤숫자로 bg를 그려주는 함수
}

init();