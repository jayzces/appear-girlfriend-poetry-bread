var girlfriends = [];
var heart = 3;

function randomizer() {
	// return Math.round(Math.random());
	console.log(Math.round(Math.random()));
}

function getGirlfriend(int x) {
	var girlfriend = randomizer();
	if(x == girlfriend) {	//e.g. 0 == bread, 1 == poetry
		girlfriends.push(Math.random());
		if(girlfriends.length() == 5) {
			console.log("Winner winner chicken dinner!");
		}
	}
	else {
		if(girlfriends.length() > 0){
			//hatagan choice ang player if ganahan siya ibattle iya gf or dili
			gfBattle()
		}
		else{
			heart--;
		}
		if(dedsNa()){
			console.log("You lose");
		}
	}
}

function gfBattle() {
	if(girlfriends[(girlfriends.length())-1] < Math.random()) {	//mas gamay ang strength value sa imo uyab kay makuhaan imo uyab
		girlfriends.pop();
	}
}

function dedsNa() {
	if(heart == 0) {
		return true;
	}
	return false;
}