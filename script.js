var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
var collided = false;

var girlfriends = [];
var heart = 3;
var stat = "";


document.body.appendChild(canvas);

// var waitingForEnter = false;
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png";

var girlReady = false;
var girlImage = new Image();
girlImage.onload = function () {
    girlReady = true;
};
girlImage.src = "images/girl.png";


var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/hero.png";

var hero = {
    speed: 200 
};

var girl = {};
var girlsCaught = 0;


var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

var reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    girl.x = 32 + (Math.random() * (canvas.width - 64));
    girl.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function (modifier) {
    if (38 in keysDown) { 
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { 
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { 
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { 
        hero.x += hero.speed * modifier;
    }

    if (
        hero.x <= (girl.x + 32)
        && girl.x <= (hero.x + 32)
        && hero.y <= (girl.y + 32)
        && girl.y <= (hero.y + 32)
    ) { 
        // caught.then(reset);
        caught();
        reset();

    }
};

var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (girlReady) {
        ctx.drawImage(girlImage, girl.x, girl.y);
    }


        ctx.font="20px Arial";
        ctx.fillText("Girlfriends: "+girlfriends.length,30,60);
        ctx.fillText("Life: "+heart,30,100);

        ctx.font="30px Verdana";

};

var caught = function (){
    collided = true;
    // alert("Hello! I am an alert box!!");
    modal.style.display = "block";
    document.getElementById("choice").style.display="block";
    document.getElementById("stat").innerHTML="";
    ++girlsCaught;

};




// var caught = new Promise((resolve, reject) =>{
//      ++girlsCaught;

//      ctx.font="20px Arial";
//      ctx.fillText("Girlsdsadsa: "+girlsCaught,30,60);
//      ctx.font="30px Verdana";

//  while (waitingForEnter == false) {
//         }
//     resolve();
// });



var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    if(!collided){
        
        render();
    }

    then = now;

    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
//  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    collided = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        collided = false;
    }
}
function randomizer() {
    rand = Math.round(Math.random());
    console.log(rand);
    return rand;
};


function getGirlfriend(x) {
    var girlfriend = randomizer();
    if(x == girlfriend) {   //e.g. 0 == bread, 1 == poetry
        girlfriends.push(Math.random());
        document.getElementById("stat").innerHTML = "Caught a girlfriend!" ;
        document.getElementById("choice").style.display="none";

        if(girlfriends.length == 5) {
            stat = "Winner winner chicken dinner!";
            document.getElementById("stat").innerHTML = "Winner winner chicken dinner!" ;
            document.getElementById("head").innerHTML = "Winner winner chicken dinner!" ;
            console.log("Winner winner chicken dinner!");
            // document.getElementById("status").innerHTML = stat ;
        }
    }
    else {
        document.getElementById("stat").innerHTML = "No girlfriend!" ;
        document.getElementById("choice").style.display="none";
        if(girlfriends.length > 0){
            //hatagan choice ang player if ganahan siya ibattle iya gf or dili
            gfBattle()
        }
        else{
            heart--;
        }
        if(dedsNa()){
            document.getElementById("stat").innerHTML = "Loseerrrr" ;
            document.getElementById("head").innerHTML = "You lose" ;
            // stat = "You lose";
            console.log("You lose");
            // document.getElementById("status").innerHTML = stat ;
        }
    }
};

function gfBattle() {
    if(girlfriends[(girlfriends.length)-1] < Math.random()*1.5) { //mas gamay ang strength value sa imo uyab kay makuhaan imo uyab
        stat = "napildi and gf";
        console.log("napildi and gf");
        // document.getElementById("status").innerHTML = stat ;
        // console.log("napildi and gf");
        girlfriends.pop();
    }else{
        console.log("nadaog si gf");
    }
};

function dedsNa() {
    if(heart == 0) {
        return true;
    }
    return false;
};