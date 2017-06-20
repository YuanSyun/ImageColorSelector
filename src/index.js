var data =[
		["R","./Image/apple.png"],
		["G","./Image/pear.png"],
		["B","./Image/grape.png"],
	];
var counter;
var scoreText;
var anserCounter;
var currentIndex;
var soundPlayer;
var mp3Src;
var oggSrc;

const soundAnserMp3 = "./Sound/Cartoon_Cowbell.mp3";
const soundAnserOgg = "./Sound/Cartoon_Cowbell.ogg";

function init(){
	coutner = 0;
	anserCounter =0;
	scoreText = document.getElementById("pScore");
	scoreText.innerHTML = anserCounter;

	soundPlayer = document.getElementById("soundPlayer");
	mp3Src = document.getElementById("mp3Src");
	oggSrc = document.getElementById("oggSrc");
	
	randomSelectImage();
}

function btnR(){
	anserColor('R');
}

function btnG(){
	anserColor('G');
}

function btnB(){
	anserColor('B');
}

function randomSelectImage(){
	//隨機抓取圖片
	currentIndex = Math.floor((Math.random()*data.length));
	document.getElementById("showImage").src = data[currentIndex][1];
	coutner++;
}

function anserColor(input){
	
	if(input == data[currentIndex][0]){
		anserCounter++;
		scoreText.innerHTML = anserCounter;

		playAnserMp3Sound(soundAnserMp3);
		playAnserOggSound(soundAnserOgg);
	}else{
		//wrong answer
	}
	
	randomSelectImage();
	
}

function playAnserMp3Sound(soundSrc){
	mp3Src.src = soundSrc;
	soundPlayer.pause();
	soundPlayer.load();
	soundPlayer.play();
}

function playAnserOggSound(soundSrc){
	oggSrc.src = soundSrc;
	soundPlayer.pause();
	soundPlayer.load();
	soundPlayer.play();
}
	