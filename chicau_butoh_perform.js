/*

<meta content="Butoh , open spaces , body , movement , score , script, programming " name="keywords">

<meta content="Butoh, ways of moving project" name="description">

<meta name="author" content="Joana Chicau">

<title>  - performance piece. </title>

*/
  

/* 

MAPS

// Butoh & body input data

// google earth: https://www.google.co.jp/maps/@35.6711308,139.6612223,22975360m/data=!3m1!1e3?hl=en

// google moon: https://www.google.co.jp/maps/space/moon/@35.6711308,139.6612223,22671583m/data=!3m1!1e3?hl=en




function the_anatomy_of_an_empty_body() { 

document.querySelector("#watermark").style.display="none";

document.querySelector("#omnibox").style.display="none";

document.querySelector(".gb_uf").style.display="none";

document.querySelector("#runway").style.display="none";

document.querySelector("#runway-expand-button").style.display="none";

document.querySelector(".app-vertical-widget-holder").style.display="none";

document.querySelector("#content-container").style.filter="grayscale(100%)";


}  

//the_anatomy_of_an_empty_body()

function empty_bodies (){
window.open("https://www.google.co.jp/maps/@35.6711308,139.6612223,22975360m/data=!3m1!1e3?hl=en",'popUpWindow','height=100','width=100','left=10','top=10');
}

//empty_bodies ()

// change head title: Outer than the outside

// EARTH values: 6000 + 4000 / 2000 + 3000 and repeat 1000 5000 / 1000 + 1200 


function within_without () {
	document.querySelector("#widget-zoom-in").click();
}

//setInterval("within_without ()",4000)


function without_within () {
	document.querySelector("#widget-zoom-out").click();
}

//setInterval("without_within ()",6000)


//document.querySelector("#content-container").style.filter="grayscale(100%)"

//___________________________________________

// geolocation:

function Where_are_we () {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, geoOptions);
    } else {
        console.log("Geolocation services are not supported by your web browser.");
    }
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var accuracy = position.coords.accuracy;
    console.log("lat: " + latitude + " long: " + longitude);
    alert("lat: " + latitude + " long: " + longitude);
}

function error(error) {
    console.log("Unable to retrieve your location due to " + error.code + ": " + error.message);
}

var geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};


//Where_are_we () 

//_____________________________________________________

//document.querySelector(".widget-scale").style.fontSize="600px"
//document.querySelector(".widget-scale").style.fontSize="150px"

var delay="10"; //how many seconds
var count='0';
var Texts=new Array();
Texts[0]="";
Texts[1]="I am writing this : ";
Texts[2]="The first dancer was a traveler";
Texts[4]="A traveler then, or an ironsmith, ";
Texts[5]="in other words 'metal'..";
Texts[6]="";
Texts[7]="For the nomad, the inside extends into the outside.";
Texts[8]="In nomadism, the only question is that of surface.";
Texts[9]="(...)the surface like an expanse of 'skin'.";
Texts[10]="";
Texts[11]="The territory liberates";
Texts[12]="what tries to go beyond it.";
Texts[13]="";
Texts[14]="Yes, however, I have got nothing to do with this theater? ";
Texts[15]="Yes, however, is there a space for me on this earth?";



function To_where (){
document.querySelector('#widget-scale-label').innerHTML=Texts[count];
count++;
if(count==Texts.length){count='0';}
setTimeout("To_where()",delay*1000);
}
//To_where ()

//___________________________________________

function Here() {
document.querySelector(".widget-scene-canvas").style.transform="matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0)";
}
//Here() 

//transform="translate(120px, 50%)";
//transform="scale(1, 5)";
//transform="skew(30deg, 20deg)";
//transform="rotate(0.5turn)";

//___________________________________________

//document.querySelector("#content-container").style.position="relative" 
//document.querySelector("#content-container").style.position="absolute"

//___________________________________________


function no_where() {
    window.close();   
} 
//setTimeout("no_where()",20000)

//___________________________________________


//EMPTY:

//document.querySelector(".notice-headline").style.fontSize="34pt"

//document.querySelector(".widget-pane").style.width="1800px"
